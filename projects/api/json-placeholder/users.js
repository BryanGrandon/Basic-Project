const url = "https://jsonplaceholder.typicode.com/";
const root = document.getElementById("root");

const createTable = (json) => {
  const $fragment = document.createDocumentFragment();
  const $template = document.querySelector(".template__table").content;
  const $clone = $template.cloneNode(true);

  $clone.querySelector(".table__thead").innerHTML = `
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>`;

  json.forEach((e) => {
    const text = `
    <tr>
      <td class="table__user__name">${e.name}</td>
      <td class="table__user__email">${e.email}</td>
    </tr>
    `;
    $clone.querySelector(".table__tbody").innerHTML += text;
  });
  $fragment.appendChild($clone);
  root.appendChild($fragment);
};

const loadUsers = async (url) => {
  try {
    const response = await fetch(url + "users");
    if (response.status === 200) {
      const json = await response.json();
      createTable(json);
    } else if (response.status === 404) console.log("Error 404");
  } catch (error) {
    console.info(error);
  }
};

loadUsers(url);
