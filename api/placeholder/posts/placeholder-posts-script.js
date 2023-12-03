const d = document;
const url = "https://jsonplaceholder.typicode.com/";

/**
 * The `createPosts` function takes in a JSON array of posts, creates HTML elements for each post, and
 * appends them to the DOM.
 * @param json - The `json` parameter is an array of objects. Each object represents a post and has two
 * properties: `title` and `body`.
 */
const createPosts = (json) => {
  const $root = d.getElementById("root");
  const $template = d.getElementById("template").content;
  const $fragment = d.createDocumentFragment();
  const $container = d.createElement("article");
  $container.classList.add("posts");

  json.forEach((e) => {
    $template.querySelector(".post__title").textContent = e.title;
    $template.querySelector(".post__body").textContent = e.body;

    const $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $container.appendChild($fragment);
  $root.appendChild($container);
};

/**
 * The function `loadPosts` is an asynchronous function that fetches posts from a given URL and creates
 * posts based on the response.
 * @param url - The `url` parameter is a string that represents the base URL of the API endpoint from
 * which you want to load the posts.
 */
const loadPosts = async (url) => {
  try {
    const response = await fetch(url + "posts");
    if (response.status === 200) {
      const json = await response.json();
      createPosts(json);
    } else if (response.status === 404) console.log("Error 404");
  } catch (error) {
    alert("Error");
    console.info(error);
  }
};
loadPosts(url);
