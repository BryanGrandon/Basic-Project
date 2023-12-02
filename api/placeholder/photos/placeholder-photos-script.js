const d = document;
const url = "https://jsonplaceholder.typicode.com/";

// Create Photos Cards
const createCard = (json) => {
  const $root = d.querySelector(".root");
  const $template = d.getElementById("template__card").content;
  const $fragment = d.createDocumentFragment();

  // Create element container
  let $cardContainer = d.createElement("article");
  $cardContainer.classList.add("photo-cards");

  /* The code block iterates over each element of the `json` array and creates a photo card for each element.*/
  json.forEach((e) => {
    if (e.id < 100) {
      $template.querySelector(".photo-card__img").setAttribute("src", e.url);
      $template.querySelector(".photo-card__img").setAttribute("alt", e.id);
      $template.querySelector(".photo-card__title").textContent = e.title;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    }
  });
  $cardContainer.appendChild($fragment);
  $root.appendChild($cardContainer);
};

/**
 * The function `loadPhotos` fetches photos from a given URL and creates a card for each photo.
 * @param url - The `url` parameter is a string representing the base URL for the API endpoint. It is
 * used to construct the complete URL for fetching the photos data.
 */
const loadPhotos = async (url) => {
  try {
    const response = await fetch(url + "photos");
    if (response.status === 200) {
      const json = await response.json();
      createCard(json);
    } else if (response.status === 404) console.log("Error 404");
  } catch (error) {
    console.info(error);
  }
};
loadPhotos(url);
