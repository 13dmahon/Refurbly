const xcode = require('xcode');
const fs = require('fs');

const projectPath = './ios/App/App.xcodeproj/project.pbxproj';
const project = xcode.project(projectPath);

project.parse(function(err) {
  if (err) {
    console.error('❌ Error parsing project:', err);
    process.exit(1);
  }

  console.log('✅ Parsed Xcode project');

  // Add GoogleService-Info.plist as a resource file
  const file = project.addResourceFile(
    'GoogleService-Info.plist',
    { target: project.getFirstTarget().uuid },
    'App'
  );

  if (file) {
    console.log('✅ Added GoogleService-Info.plist to project');
  } else {
    console.log('⚠️ File may already exist or could not be added');
  }

  // Write the updated project file
  fs.writeFileSync(projectPath, project.writeSync());
  console.log('✅ Saved project file');
});
