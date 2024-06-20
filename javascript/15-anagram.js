const anagram = (string1, string2) => {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    console.Error("One of the values entered is not a text string");
    return null;
  }
  const text1 = string1.trim().toLowerCase();
  const text2 = string2.trim().toLowerCase();
  let status = true;

  if (text1.length == text2.length) {
    if (text1 == text2) status = false;
    const textArray1 = text1.split("");
    for (let i = 0; i < textArray1.length; i++) {
      if (!text2.includes(textArray1[i])) status = false;
    }
  }
  return status;
};

console.log(anagram("meat", "team"));
console.log(anagram("note", "note"));
console.log(anagram("the", "she"));
