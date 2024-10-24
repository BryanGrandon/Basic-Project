const morseCodeTs = (text: string, isMorse: boolean): string => {
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
  const keys: string[] = Object.keys(morse);
  const values: string[] = Object.values(morse);

  let arr = !isMorse
    ? text.trim().toLowerCase().split("")
    : text.trim().toLowerCase().split(" ");

  let finalText: string = "";

  if (!isMorse) {
    for (let i = 0; i < arr.length; i++) {
      finalText += keys.includes(arr[i])
        ? morse[`${arr[i]}`] + " "
        : arr[i] + " ";
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      let index = values.indexOf(arr[i]);
      finalText += values.includes(arr[i]) ? keys[index] : arr[i];
    }
  }
  return finalText.trim();
};

console.log(morseCodeTs("hello world", false));
console.log(morseCodeTs(".... . .-.. .-.. --- / .-- --- .-. .-.. -..", true));
