export const morseCode = (text) => {
  if (typeof text !== 'string') throw new Error('parameter provider must be a text string')
  const morse = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    ñ: '--.--',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.-',
    z: '--..',
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    '.': '.-.-.-',
    ',': '--..--',
    ':': '---...',
    '-': '-....-',
    '(': '-.--.-',
    ')': '-.--.-',
    '=': '-...-',
    ';': '-.-.-.',
    '?': '..--..',
    '¿': '..--..',
    ' " ': '.-..-.',
    '+': '.-.-.',
    "'": '.----.',
    '/': '-..-.',
    ' ': '/'
  }

  let output = ''
  const paragraph = text.toLowerCase()
  const regex = /[a-zA-Z0-9]/.test(paragraph)

  paragraph.split(regex ? '' : ' ').forEach((e) => {
    Object
      .entries(morse)
      .forEach(([key, value]) => {
        if (e === key && regex) output += `${value} `
        else if (e === value) output += `${key}`
      })
  })
  return output.trim()
}
