const StyleDictionary = require('style-dictionary');

// Създаване на персонализирана трансформация за px към rem
StyleDictionary.registerTransform({
  name: 'size/px-to-rem',
  type: 'value',
  matcher: function (token) {
    return token.attributes.category === 'size';
  },
  transformer: function (token) {
    const baseFontSize = 16; // базов размер на шрифта в пиксели
    const valueInPx = parseFloat(token.value);
    return `${valueInPx / baseFontSize}rem`;
  }
});
