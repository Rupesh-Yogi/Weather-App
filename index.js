// Fetches API

const API_KEY = "4a37fc286f3cf9d329d053c8bcea3f3c";

const searchInput = document.querySelector(".search input");
const searchIcon = document.querySelector(".search i");

// Click search icon
searchIcon.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) getWeather(city);
});

// Press Enter key
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = searchInput.value.trim();
    if (city) getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!res.ok) throw new Error("City not found!");

    const data = await res.json();

    document.querySelector(".placeName").textContent =
      `${data.name}, ${data.sys.country}`;

      updateFavIcon(); 

    document.querySelector(".degree .number h1").textContent =
      `${Math.round(data.main.temp)}°`;

    document.querySelector(".degree .number p:last-child").textContent =
      `${data.weather[0].main}, Feels ${Math.round(data.main.feels_like)}°`;

    document.querySelector(".humidity h2").textContent =
      `${data.main.humidity}%`;

    document.querySelector(".wind h2").textContent = `${data.wind.speed} m/s`;

    document.querySelector(".pressure h2").textContent =
      `${data.main.pressure} hPa`;
  } catch (err) {
    alert(err.message);
  }
}

//  For the favourite Icon

const favouriteIcon = document.querySelector(".favIcon"); // favourite icon

favouriteIcon.addEventListener("click", () => {
  const cityName = document.querySelector(".placeName").textContent; // value as a city name in display
  const favData = JSON.parse(localStorage.getItem("favourites")) || [];

  if (favData.includes(cityName)) {
    alert("Already added to favourite list.");
  } else {
    favData.push(cityName);
    localStorage.setItem("favourites", JSON.stringify(favData));
  }

  updateFavIcon();
});


function updateFavIcon(){
  const cityName = document.querySelector(".placeName").textContent;
  const favData = JSON.parse(localStorage.getItem("favourites")) || [];

    if (favData.includes(cityName)) {
    favouriteIcon.style.color = "blue";
  } else {
    favouriteIcon.style.color = "";
  }
}

window.addEventListener("load", () => {
  updateFavIcon();
});


// To update the content in index page when the view
//  button is clicked on favourite page

const cityDetails = localStorage.getItem("viewCity");

if (cityDetails) {
  getWeather(cityDetails);
  localStorage.removeItem("viewCity");
}
