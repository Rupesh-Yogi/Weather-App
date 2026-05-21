const favCityList = JSON.parse(localStorage.getItem("favourites")) || [];

if (favCityList.length === 0) {
  document.querySelector(".errorMessage").style.display = block;
} else {
  document.querySelector(".errorMessage").style.display = none;

  const favCities = document.querySelector(".favouriteCities");

  // const cities = document.createElement("div");

  // cities.textContent = favCityList;

  // favCities.appendChild(cities);

  favCityList.forEach((element) => {   // use of elment in forEach is it usable in current situation
    const cities = document.createElement("div");

    cities.textContent = favCityList;

    favCities.appendChild(cities);
  });
}
