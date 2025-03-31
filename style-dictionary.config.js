// filepath: /Users/m.milde/Library/CloudStorage/OneDrive-TINQINAD/Work/design-tokens-setup/style-dictionary.config.js
const StyleDictionary = require('style-dictionary');

// Register a custom transform to remove the "switch-os" prefix
StyleDictionary.registerTransform({
  name: 'name/remove-switch-os',
  type: 'name',
  transformer: function (token) {
    // Remove "switch-os" from the token name
    return token.name.replace(/^switch-os-/, '');
  }
});

module.exports = {
  source: ["sapphire-design-tokens/all/**/*.json"],
  platforms: {
    web: {
      transformGroup: "css",
      buildPath: "sapphire-design-tokens/css/",
      transforms: ["name/remove-switch-os", "size/px"],
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true
          }
        }
      ]
    },
    iosSwift: {
      transforms: ["name/remove-switch-os", "name/camel", "color/ColorSwiftUI"],
      buildPath: "Sources/Tokens/",
      files: [
        {
          destination: "SapphireColors.swift",
          format: "ios-swift/any.swift",
          options: {
            "className": "SapphireColors",
            "import": "SwiftUI",
            "objectType": "struct",
            "outputReferences": true
          }
        },
        {
          destination: "SapphireFontSizes.swift",
          format: "ios-swift/any.swift",
          options: {
            "className": "SapphireFontSizes",
            "import": "Foundation",
            "objectType": "struct",
            "outputReferences": true
          }
        }
      ]
    },
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
      files: [
        {
          destination: "tokens.xml",
          format: "android/resources",
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
};