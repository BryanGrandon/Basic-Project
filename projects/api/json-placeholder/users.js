const url = "https://jsonplaceholder.typicode.com/";
const root = document.getElementById("root");

const createUserTable = (json) => {
  const $fragmentUsers = document.createDocumentFragment();

  const $thead = document.createElement("thead");
  $thead.classList = "table__head";
  $thead.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>`;
  $fragmentUsers.appendChild($thead);

  const $tbody = document.createElement("tbody");
  $tbody.classList = "table__body";
  json.forEach((e) => {
    const $tr = document.createElement("tr");
    $tr.classList = "table__user";
    $tr.innerHTML = `
    <td class="table__user__name">${e.name}</td>
    <td class="table__user__email">${e.email}</td>
  `;
    $tbody.appendChild($tr);
  });
  $fragmentUsers.appendChild($tbody);

  const $table = document.createElement("table");
  $table.classList = "table";
  $table.appendChild($fragmentUsers);
  root.appendChild($table);
};

const loadUsers = async (url) => {
  try {
    const response = await fetch(url + "users");
    if (response.status === 200) {
      const json = await response.json();
      createUserTable(json);
    } else if (response.status === 404) console.log("Error 404");
  } catch (error) {
    console.info(error);
  }
};

loadUsers(url);
