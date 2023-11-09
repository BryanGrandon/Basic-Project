const url = "https://jsonplaceholder.typicode.com/";
const root = document.getElementById("root");

const createCard = (json) => {
  const $root = document.getElementById("root");
  const $template = document.getElementById("template__card").content;
  const $fragment = document.createDocumentFragment();

  json.forEach((e) => {
    $template.querySelector(".user_card__company_name").textContent =
      e.company.name;

    $template.querySelector(".user_card__info_name").textContent = e.name;

    $template.querySelector(".user_card__info_section_phone").textContent =
      e.phone;

    $template.querySelector(".user_card__info_section_email").textContent =
      e.email;

    $template.querySelector(
      ".user_card__info_section_address"
    ).textContent = `${e.address.street}, ${e.address.city}`;

    $template.querySelector(".user_card__info_section_website").textContent =
      e.website;
    $template
      .querySelector(".user_card__info_section_website")
      .setAttribute("href", e.website);

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $root.appendChild($fragment);
};

const loadUsers = async (url) => {
  try {
    const response = await fetch(url + "users");
    if (response.status === 200) {
      const json = await response.json();
      createCard(json);
    } else if (response.status === 404) console.log("Error 404");
  } catch (error) {
    console.info(error);
  }
};

loadUsers(url);
