const d = document;
export function Problem10(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const user1 = {
        name: prompt("Name"),
        age: Number(prompt("age")),
      };
      const user2 = {
        name: prompt("Name"),
        age: Number(prompt("age")),
      };
      const user3 = {
        name: prompt("Name"),
        age: Number(prompt("age")),
      };

      const olderAge = Math.max(user1.age, user2.age, user3.age);
      if (user1.age === olderAge) alert(`${user1.name} is older`);
      else if (user2.age === olderAge) alert(`${user2.name} is older`);
      else if (user3.age === olderAge) alert(`${user3.name} is older`);
    }
  });
}
