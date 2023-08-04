// service.
async function fetchApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function fetchJoke() {
  return fetchApi("https://api.chucknorris.io/jokes/random");
}

function fetchCategories() {
  return fetchApi("https://api.chucknorris.io/jokes/categories");
}

function fetchByCategory(category) {
  return fetchApi(
    "https://api.chucknorris.io/jokes/random?category=" + category
  );
}

export { fetchJoke, fetchCategories, fetchByCategory };
