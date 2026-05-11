


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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) throw new Error("City not found!");

    const data = await res.json();

    document.querySelector(".placeName").textContent =
      `${data.name}, ${data.sys.country}`;

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


//////////////////////////////////////////


// const API_KEY = "4a37fc286f3cf9d329d053c8bcea3f3c";

// // Load Header
// fetch("/components/header.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.querySelector(".header").innerHTML = data;

//     const menuIcon = document.querySelector(".menu_icon");
//     const nav = document.querySelector(".midHeader nav ul");
//     const darkMode = document.querySelector(".dark_mode");
//     const body = document.querySelector("body");

//     menuIcon.addEventListener("click", () => {
//       nav.classList.toggle("navBar");
//     });

//     darkMode.addEventListener("click", () => {
//       body.classList.toggle("dark");
//       if (document.body.classList.contains("dark")) {
//         localStorage.setItem("theme", "dark");
//       } else {
//         localStorage.setItem("theme", "light");
//       }
//     });

//     if (localStorage.getItem("theme") == "dark") {
//       document.body.classList.add("dark");
//     }
//   });

// // Load Footer
// fetch("/components/footer.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.querySelector(".footer").innerHTML = data;
//   });

// // Weather API
// const searchInput = document.querySelector(".search input");
// const searchIcon = document.querySelector(".search i");

// async function getWeather(city) {
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     );

//     if (!res.ok) throw new Error("City not found! Please check the spelling.");

//     const data = await res.json();

//     document.querySelector(".placeName").textContent =
//       `${data.name}, ${data.sys.country}`;

//     document.querySelector(".degree .number h1").textContent =
//       `${Math.round(data.main.temp)}°`;

//     document.querySelector(".degree .number p:last-child").textContent =
//       `${data.weather[0].main}, Feels ${Math.round(data.main.feels_like)}°`;

//     document.querySelector(".humidity h2").textContent =
//       `${data.main.humidity}%`;

//     document.querySelector(".wind h2").textContent = `${data.wind.speed} m/s`;

//     document.querySelector(".pressure h2").textContent =
//       `${data.main.pressure} hPa`;
//   } catch (err) {
//     alert(err.message);
//   }
// }