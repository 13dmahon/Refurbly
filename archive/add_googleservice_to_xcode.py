import re
import sys

# Read the project file
with open('./ios/App/App.xcodeproj/project.pbxproj', 'r') as f:
    content = f.read()

# Generate IDs (24 char uppercase hex like existing ones)
import random
file_ref_id = ''.join(random.choices('0123456789ABCDEF', k=24))
build_file_id = ''.join(random.choices('0123456789ABCDEF', k=24))

print(f"Generated IDs:")
print(f"  FileRef: {file_ref_id}")
print(f"  BuildFile: {build_file_id}")

# 1. Add to PBXBuildFile section (after the section header)
build_file_entry = f'\t\t{build_file_id} /* GoogleService-Info.plist in Resources */ = {{isa = PBXBuildFile; fileRef = {file_ref_id} /* GoogleService-Info.plist */; }};\n'
content = re.sub(
    r'(/\* Begin PBXBuildFile section \*/\n)',
    r'\1' + build_file_entry,
    content,
    count=1
)

# 2. Add to PBXFileReference section (after the section header)
file_ref_entry = f'\t\t{file_ref_id} /* GoogleService-Info.plist */ = {{isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = "GoogleService-Info.plist"; sourceTree = "<group>"; }};\n'
content = re.sub(
    r'(/\* Begin PBXFileReference section \*/\n)',
    r'\1' + file_ref_entry,
    content,
    count=1
)

# 3. Add to Resources build phase (in the files array, before the closing );)
# Find the PBXResourcesBuildPhase section and add to the files array
resources_pattern = r'(2FAD9763203C412B000D30F8 /\* config\.xml in Resources \*/,\n)'
resources_addition = r'\1\t\t\t\t' + build_file_id + r' /* GoogleService-Info.plist in Resources */,\n'
content = re.sub(resources_pattern, resources_addition, content, count=1)

# 4. Add to App group children (after Info.plist)
app_group_pattern = r'(504EC3131FED79650016851F /\* Info\.plist \*/,\n)'
app_group_addition = r'\1\t\t\t\t' + file_ref_id + r' /* GoogleService-Info.plist */,\n'
content = re.sub(app_group_pattern, app_group_addition, content, count=1)

# Write the modified project file
with open('./ios/App/App.xcodeproj/project.pbxproj', 'w') as f:
    f.write(content)

print("\n✅ Successfully added GoogleService-Info.plist to Xcode project")

# Verify
import subprocess
result = subprocess.run(['grep', '-c', 'GoogleService-Info.plist', './ios/App/App.xcodeproj/project.pbxproj'], 
                       capture_output=True, text=True)
print(f"Total references added: {result.stdout.strip()}")
