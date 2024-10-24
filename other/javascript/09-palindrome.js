const palindrome = (text) => {
  let conditional = typeof text == "number" || typeof text == "string";
  let originalText = conditional ? String(text).toLocaleLowerCase() : null;

  if (originalText == null) {
    console.error("The value delivered is not valid.");
    // return null;
    return "The value delivered is not valid.";
  }

  const invertedText = originalText.split("").reverse().join("");
  const isPalindrome = originalText == invertedText ? true : false;

  // return isPalindrome; // True or False
  return isPalindrome ? "Is a Palindrome" : "Is not a Palindrome"; // Text
};

const example = {
  21: palindrome(21),
  22: palindrome(22),
  level: palindrome("Level"),
  example: palindrome("Example"),
  array: palindrome([1]),
};

console.table(example);
