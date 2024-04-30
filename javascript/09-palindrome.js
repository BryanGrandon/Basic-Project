const palindrome = (string) => {
  let text = string;
  if (typeof string !== "string") {
    console.error("The value delivered is not valid.");
    return null;
  }
  const invertedText = text.toLowerCase().split("").reverse().join("");
  const isPalindrome = text.toLowerCase() == invertedText ? true : false;
  return isPalindrome;
};

console.log(palindrome("Level"));
console.log(palindrome("Example"));
console.log("-------------------");
console.log(palindrome(21));
