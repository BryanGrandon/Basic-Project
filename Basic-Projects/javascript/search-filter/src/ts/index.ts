const d = document;

function searchFilter(input: string, selector: string) {
  d.addEventListener("keyup", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.matches(input)) {
      if (event.key === "Escape") {
        target.value = "";
      }
      const allSelector = d.querySelectorAll(selector);
      allSelector.forEach((el) => {
        el.textContent?.toLowerCase().includes(target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }
  });
}

d.addEventListener("DOMContentLoaded", () => {
  searchFilter(".card-filter", ".card");
});
