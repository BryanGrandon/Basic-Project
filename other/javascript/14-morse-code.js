const morseCode = (text) => {
  const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    ñ: "--.--",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.-",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    ":": "---...",
    "-": "-....-",
    "(": "-.--.-",
    ")": "-.--.-",
    "=": "-...-",
    ";": "-.-.-.",
    "?": "..--..",
    "¿": "..--..",
    ' " ': ".-..-.",
    "+": ".-.-.",
    "'": ".----.",
    "/": "-..-.",
    " ": "/",
  };

  let parameter = /[a-zA-Z0-9]/;

  const keys = Object.keys(morse);
  const values = Object.values(morse);

  let finalText = "";

  if (parameter.test(text)) {
    const arr = text.trim().toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
      finalText += keys.includes(arr[i])
        ? morse[`${arr[i]}`] + " "
        : arr[i] + " ";
    }
  } else {
    const arr = text.trim().toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
      let index = values.indexOf(arr[i]);
      finalText += values.includes(arr[i]) ? keys[index] : arr[i];
    }
  }
  return finalText.trim();
};
console.log(morseCode("hello world"));
console.log(morseCode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));
