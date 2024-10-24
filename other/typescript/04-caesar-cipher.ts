const caesarCipherTs = (message: string, scroll: number): string => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".trim().split("");
  const messageInArray = message.trim().toUpperCase().split("");
  let encryptedMessage: string = "";

  messageInArray.map((letter) => {
    if (alphabet.includes(letter)) {
      let scrolling: number =
        alphabet.indexOf(letter) + (scroll % alphabet.length);

      if (scrolling < alphabet.length) {
        encryptedMessage += alphabet.at(scrolling);
      } else if (scrolling >= alphabet.length) {
        encryptedMessage += alphabet.at(scrolling - alphabet.length);
      }
    } else encryptedMessage += letter;
  });
  return encryptedMessage;
};

console.log(caesarCipherTs("Hello World", 2));
