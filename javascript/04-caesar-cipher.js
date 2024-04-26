const caesarCipher = (message, scroll) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let encryptedMessage = "";
  const messageInArray = message.trim().toUpperCase().split("");

  messageInArray.map((letter) => {
    if (alphabet.includes(letter)) {
      const letterIndex = alphabet.indexOf(letter);

      let scrolling = scroll % alphabet.length;

      if (letterIndex + scrolling < alphabet.length) {
        encryptedMessage += alphabet.at(letterIndex + scrolling);
      } else if (letterIndex + scrolling >= alphabet.length) {
        encryptedMessage += alphabet.at(
          letterIndex + scrolling - alphabet.length
        );
      }
    } else {
      encryptedMessage += letter;
    }
  });
  return encryptedMessage;
};

console.log(caesarCipher("Hello world", 0));
console.log(caesarCipher("Hello world", 2));
console.log(caesarCipher("Hello world", -2));
