const d = document;
export function Problem18(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let text = prompt("Is Palindrome");
      let arr = text.split("");
      let isPalindrome = arr.reverse().join("").toString();
      text == isPalindrome ? alert(true) : alert(false);
    }
  });
}
