const d = document;

const toggleBtn = d.querySelector(".navbar__toggle_btn");
const toggleBtnIcon = d.querySelector(".navbar__toggle_btn i");
const dropdownMenu = d.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("dropdown_menu--open");
  const isOpen = dropdownMenu.classList.contains("dropdown_menu--open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
