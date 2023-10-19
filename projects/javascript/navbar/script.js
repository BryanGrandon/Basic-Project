const d = document;

const toggleBtn = d.querySelector(".toggle_btn");
const toggleBtnIcon = d.querySelector(".toggle_btn i");
const dropdownMenu = d.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
