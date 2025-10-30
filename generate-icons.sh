#!/bin/bash
echo "Generating app icons..."
mkdir -p android/app/src/main/res/mipmap-mdpi
mkdir -p android/app/src/main/res/mipmap-hdpi
mkdir -p android/app/src/main/res/mipmap-xhdpi
mkdir -p android/app/src/main/res/mipmap-xxhdpi
mkdir -p android/app/src/main/res/mipmap-xxxhdpi
mkdir -p ios/App/App/Assets.xcassets/AppIcon.appiconset

if ! command -v convert &> /dev/null; then
    echo "Installing ImageMagick..."
    sudo apt-get update && sudo apt-get install -y imagemagick
fi

ICON_PATH="resources/icon.png"
if [ -f "$ICON_PATH" ]; then
    convert "$ICON_PATH" -resize 48x48 android/app/src/main/res/mipmap-mdpi/ic_launcher.png
    convert "$ICON_PATH" -resize 72x72 android/app/src/main/res/mipmap-hdpi/ic_launcher.png
    convert "$ICON_PATH" -resize 96x96 android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
    convert "$ICON_PATH" -resize 144x144 android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
    convert "$ICON_PATH" -resize 192x192 android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
    convert "$ICON_PATH" -resize 1024x1024 ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png
    echo "✅ Icons generated!"
else
    echo "❌ Icon not found at $ICON_PATH"
    exit 1
fi
