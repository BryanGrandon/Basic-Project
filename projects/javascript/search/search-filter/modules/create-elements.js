export function createElements(container, template, cardsContent) {
  const $containerCards = document.querySelector(container);

  const $template = document.getElementById(template).content;
  const $fragment = document.createDocumentFragment();

  cardsContent.forEach((e) => {
    $template.querySelector("img").setAttribute("src", e.img);
    $template.querySelector("img").setAttribute("alt", e.title);
    $template.querySelector("figcaption").textContent = e.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $containerCards.appendChild($fragment);
}
