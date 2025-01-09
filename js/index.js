const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const mealResults = document.getElementById('meal-results');
const showAllBtn = document.getElementById('show-all-btn');

let allMeals = [];

async function searchMeals(query) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await response.json();
  return data.meals || [];
}