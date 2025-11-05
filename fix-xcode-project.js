const xcode = require('xcode');
const fs = require('fs');
const path = require('path');

const projectPath = './ios/App/App.xcodeproj/project.pbxproj';
const project = xcode.project(projectPath);

project.parse(function(err) {
  if (err) {
    console.error('Error parsing project:', err);
    process.exit(1);
  }

  // Remove any existing GoogleService-Info.plist references (cleanup)
  const files = project.pbxFileReferenceSection();
  for (const uuid in files) {
    if (files[uuid].path && files[uuid].path.includes('GoogleService-Info.plist')) {
      delete files[uuid];
    }
  }

  // Add GoogleService-Info.plist cleanly
  const file = project.addResourceFile(
    'App/GoogleService-Info.plist',
    { target: project.getFirstTarget().uuid },
    project.getFirstProject().firstProject.targets[0]
  );

  console.log('✅ Added GoogleService-Info.plist to project');

  // Write the fixed project file
  fs.writeFileSync(projectPath, project.writeSync());
  console.log('✅ Project file fixed and saved');
});
