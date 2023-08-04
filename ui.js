// import

import {
  fetchJoke,
  fetchCategories,
  fetchByCategory,
} from "./chuck.service.js";

// ref

const $joke = document.querySelector(".jokeText");
const $button = document.querySelector("#next");
const $buttonFind = document.querySelector("#search");
const $select = document.querySelector(".catOptions");

// fn

function printJoke(joke) {
  $joke.innerText = joke.value.toUpperCase();
}

function renderCatSelector(cat) {
  for (let category of cat) {
    const option = document.createElement("option");
    option.innerText = category.toUpperCase();
    option.value = category;
    $select.appendChild(option);
  }
}

// events

$button.onclick = async () => {
  const jokeResult = await fetchJoke();
  printJoke(jokeResult);
};

$buttonFind.onclick = async () => {
  const searchRes = await fetchByCategory($select.value);
  printJoke(searchRes);
};

document.addEventListener("DOMContentLoaded", async () => {
  const catRes = await fetchCategories();
  renderCatSelector(catRes);
  const jokeResult = await fetchJoke();
  printJoke(jokeResult);
});
