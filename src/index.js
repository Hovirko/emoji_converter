// emoji-converter.js

const emojiMap = {
    ":)": "😊",
    ":(": "😢",
    ":D": "😄",
    ":O": "😲",
    ";)": "😉",
    "<3": "❤️",
    ":P": "😛",
    ":|": "😐",
    ":*": "😘",
    ":/": "😕"
};

function textToEmoji(text) {
    return text.replace(/(:\)|:\(|:D|:O|;\)|<3|:P|:\||:\*|:\/)/g, (match) => {
        return emojiMap[match] || match;
    });
}

function emojiToText(emoji) {
    const reverseMap = {};
    for (const key in emojiMap) {
        if (emojiMap.hasOwnProperty(key)) {
            reverseMap[emojiMap[key]] = key;
        }
    }
    return emoji.replace(/(😊|😢|😄|😲|😉|❤️|😛|😐|😘|😕)/g, (match) => {
        return reverseMap[match] || match;
    });
}

module.exports = {
    textToEmoji,
    emojiToText
};