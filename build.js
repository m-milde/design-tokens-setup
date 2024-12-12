const StyleDictionary = require('style-dictionary');

// Register the SwiftUI format
StyleDictionary.registerFormat({
  name: 'swiftui',
  formatter: function (dictionary) {
    return `import SwiftUI\n\nstruct DesignTokens {\n${dictionary.allProperties
      .map(
        prop => `    static let ${prop.name} = ${convertToSwiftUI(prop)}`
      )
      .join('\n')}\n}`;
  }
});

// Helper function to convert tokens to SwiftUI syntax
function convertToSwiftUI(prop) {
  if (prop.attributes.category === 'color') {
    return `Color(red: ${prop.value.r}, green: ${prop.value.g}, blue: ${prop.value.b}, opacity: ${prop.value.a})`;
  } else if (prop.attributes.category === 'size') {
    return `${prop.value}pt`;
  }
  return prop.value;
}

module.exports = StyleDictionary;
