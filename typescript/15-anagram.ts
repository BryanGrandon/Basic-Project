const anagramTs = (mainText: string, secondText: string): boolean => {
  const arrayMain: string[] = mainText.split("");
  const arraySecond: string[] = secondText.split("");

  if (arrayMain.length != arraySecond.length || mainText == secondText) {
    return false;
  }
  let isAnagram: number = 0;
  for (let i = 0; i < arrayMain.length; i++) {
    if (arrayMain.includes(arraySecond[i])) isAnagram++;
  }
  return isAnagram == arrayMain.length ? true : false;
};

console.log(anagramTs("meat", "team"));
console.log(anagramTs("hello", "hello"));
