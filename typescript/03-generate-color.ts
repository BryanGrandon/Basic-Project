const generateColorTs = (transparency: boolean = false): string => {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
  let alpha: number = transparency == true ? 8 : 6;
  let color: string = "";

  for (let i: number = 0; i < alpha; i++) {
    let random = Math.floor(Math.random() * hex.length);
    color += hex[random];
  }

  return "#" + color;
};

// 6 => #123456
console.log(generateColorTs());

// 8 => #12345678
console.log(generateColorTs(true));
