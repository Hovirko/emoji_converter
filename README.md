# Emoji Converter

## Description

Emoji Converter is a simple JavaScript package that converts text representations of emojis to their corresponding emoji characters.

## Installation

You can install this package via npm:

```bash
npm i emojietor```

## Usage

After installation, you can use this package by requiring it in your JavaScript code and invoking the `convertToEmoji()` function with a string input:

```javascript
const emojiConverter = require('emoji-converter');

const text = 'I am happy :)';
const convertedText = emojiConverter.convertToEmoji(text);
console.log(convertedText); // Output: 'I am happy 😊'
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This package is licensed under the [MIT License](LICENSE).
