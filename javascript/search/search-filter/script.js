import { createElements } from "./modules/create-elements.js";
import { searchFilter } from "./modules/search.js";

const cardsContent = [
  {
    title: "Technology",
    img: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg",
  },
  {
    title: "Animals",
    img: "https://cdn.pixabay.com/photo/2020/06/20/11/08/siamese-cat-5320568_960_720.jpg",
  },
  {
    title: "Peoples",
    img: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg",
  },
  {
    title: "Architecture",
    img: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg",
  },
  {
    title: "Nature",
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createElements(".cards", "template", cardsContent);
  searchFilter(".card-filter", ".card");
});
