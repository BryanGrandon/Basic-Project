const orderTheList = (list, ascOrDesc) => {
  if (typeof ascOrDesc != "string") {
    console.error(`Value ${ascOrDesc} is not a string`);
    return null;
  }

  if (ascOrDesc == "asc" || ascOrDesc == "desc") {
    let array = list;
    let result = [];
    let value;
    while (result.length < list.length) {
      for (let i = 0; i < array.length; i++) {
        if (i == 0) value = array[i];
        if (value > array[i]) value = array[i];
      }
      ascOrDesc == "asc" ? result.push(value) : result.unshift(value);
      array[array.indexOf(value)] = null;
      array = array.filter((e) => e != null);
    }
    return result;
  } else {
    console.error("The value is not asc (ascending) or desc (descending).");
    return null;
  }
};
console.log(orderTheList([4, 1, 4, 2, 5, 3], "asc"));
console.log(orderTheList([4, 1, 4, 2, 5, 3], "desc"));
