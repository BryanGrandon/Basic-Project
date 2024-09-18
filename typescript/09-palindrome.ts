const palindromeTs = (option: string | number): string => {
  let text: string = String(option).toLocaleLowerCase();
  const invertedText: string = text.split("").reverse().join("");
  const isPalindrome: boolean = text == invertedText ? true : false;

  return isPalindrome ? "Is a Palindrome" : "Is not a Palindrome";
};

console.log(palindromeTs(21));
console.log(palindromeTs("level"));
