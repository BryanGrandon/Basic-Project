const d = document;
export function Problem9(btn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      const row = Number(prompt("Row"));
      const column = Number(prompt("Column"));
      let result = row * column;

      const $table = d.createElement("table");
      const $fragment = d.createDocumentFragment();

      for (let i = 0; i < row; i++) {
        const $row = d.createElement("tr");
        for (let c = 0; c < column; c++) {
          const $colum = d.createElement("td");
          $colum.textContent = result;
          result--;
          $row.appendChild($colum);
        }
        $fragment.appendChild($row);
      }
      $table.appendChild($fragment);
      console.log($table);
      alert("ctrl + shift + j");
    }
  });
}
