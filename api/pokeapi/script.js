const url = "https://pokeapi.co/api/v2/pokemon/";
const getRandomInt = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

const fetchData = async (url, random) => {
  try {
    const res = await fetch(url + random);
    const json = res.ok ? await res.json() : Promise.reject();
    const pokemon = pokemonData(json);
    createCard(pokemon);
    getColor(pokemon);
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const random = getRandomInt(1, 252);
  fetchData(url, random);
  // Reload
  const time = setInterval(() => {
    location.reload();
  }, 3000);
  setTimeout(() => {
    clearInterval(time);
  }, 50000);
});

const pokemonData = (json) => {
  const data = {
    name: json.name,
    number: json.id,
    svg: json.sprites.other.dream_world.front_default,
    stats: {
      hp: json.stats[0].base_stat,
      attack: json.stats[1].base_stat,
      defense: json.stats[2].base_stat,
      speed: json.stats[5].base_stat,
    },
    type: [],
  };
  json.types.forEach((e) => data.type.push(e.type.name));
  return data;
};

const createCard = (pokemon) => {
  const d = document;
  const root = d.getElementById("root");
  const $pokemonTemplate = d.getElementById("pokemon-template").content;
  const $clone = $pokemonTemplate.cloneNode(true);
  const fragment = d.createDocumentFragment();

  // Header
  const textHeader = `
  <p class="header__element pokemon__number" >N°${pokemon.number}</p>
  <p class="header__element pokemon__stats__hp" >hp:${pokemon.stats.hp}</p>
  `;
  $clone.querySelector(".pokemon-card__header").innerHTML = textHeader;

  // SVG
  $clone.querySelector(".pokemon-card__svg").setAttribute("src", pokemon.svg);
  $clone.querySelector(".pokemon-card__svg").setAttribute("alt", pokemon.name);

  // Name
  $clone
    .querySelector(".pokemon-card__name")
    .insertAdjacentText("afterbegin", pokemon.name);

  // Types
  let textType = ``;
  pokemon.type.length > 1
    ? (textType = `<p class="pokemon-card__type type-${pokemon.type[0]}">${pokemon.type[0]}</p> <p class="pokemon-card__type type-${pokemon.type[1]}">${pokemon.type[1]}</p>`)
    : (textType = `<p class="pokemon-card__type type-${pokemon.type[0]}">${pokemon.type[0]}</p>`);
  $clone.querySelector(".pokemon-card__types").innerHTML = textType;

  // Stats
  let textStats = `
  <section class="pokemon__stat">
    <p class="pokemon__stat__number">${pokemon.stats.attack}</p>
    <p class="pokemon__stat__name">Attack</p>
  </section>
  <section class="pokemon__stat">
    <p class="pokemon__stat__number">${pokemon.stats.defense}</p>
    <p class="pokemon__stat__name">Defense</p>
  </section>
  <section class="pokemon__stat">
    <p class="pokemon__stat__number">${pokemon.stats.speed}</p>
    <p class="pokemon__stat__name">Speed</p>
  </section>
  `;
  $clone.querySelector(".pokemon-card__stats").innerHTML = textStats;

  // add html
  fragment.appendChild($clone);
  root.appendChild(fragment);
};

const getColor = (pokemon) => {
  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  const pokemonType1 = pokemon.type[0];
  const pokemonType2 = pokemon.type[1];

  let gradient;

  const $type1 = document.querySelector(`.type-${pokemonType1}`);
  const $type2 = document.querySelector(`.type-${pokemonType2}`);
  Object.entries(typeColor).forEach((e) => {
    if (e[0] === pokemonType1) {
      gradient = e[1];
      console.log(e[1]);
      $type1.style.setProperty("background", e[1]);
    }
    if (e[0] === pokemonType2) {
      $type2.style.setProperty("background", e[1]);
    }
  });
  if (gradient == undefined) gradient = "#818199";
  console.log(gradient);
  const $html = document.documentElement;
  $html.style.setProperty("--gd", gradient);
  $html.style.setProperty("--gd-c6", gradient + "c6");
  $html.style.setProperty("--gd-50", gradient + "50");
};
