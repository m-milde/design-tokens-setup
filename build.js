const StyleDictionary = require('style-dictionary');

// Регистриране на персонализирани формати
StyleDictionary.registerFormat({
  name: 'web/resources-with-references',
  formatter: ({ dictionary }) => {
    return dictionary.allProperties
      .map(token => `$${token.name}: ${token.original.value.includes('{') ? token.original.value : token.value};`)
      .join('\\n');
  },
});

StyleDictionary.registerFormat({
  name: 'ios/resources-with-references',
  formatter: ({ dictionary }) => {
    return dictionary.allProperties
      .map(token => `#define ${token.name} ${token.original.value.includes('{') ? token.original.value : token.value}`)
      .join('\\n');
  },
});

StyleDictionary.registerFormat({
  name: 'android/resources-with-references',
  formatter: ({ dictionary }) => {
    return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<resources>\n${dictionary.allProperties
      .map(token => {
        const value = token.original.value.includes('{') ? token.original.value : token.value;
        return `  <dimen name=\"${token.name}\">${value}</dimen>`;
      })
      .join('\\n')}\n</resources>`;
  },
});

// Зареждане и изпълнение на конфигурацията
StyleDictionary.extend('./config.json').buildAllPlatforms();
