// document.location.reload();

const favCityList = JSON.parse(localStorage.getItem("favourites")) || [];

if (favCityList.length === 0) {
  document.querySelector(".errorMessage").style.display = "block";
} else {
  document.querySelector(".errorMessage").style.display = "none";

  const favCities = document.querySelector(".favouriteCities");

  favCityList.forEach((element) => {
    const cities = document.createElement("div");
    cities.classList.add("showCities");

    // cities.textContent = element;

    cities.innerHTML = ` 
      <p> ${element} </p>

    <div class="buttonsForCities">
        <button class = "view">view</button>
        <button class = "delete">delete</button>
    </div>
                 
    `;

    favCities.appendChild(cities);

    // For buttons

    // Delete button

    const view = cities.querySelector(".view");
    const remove = cities.querySelector(".delete");

    remove.addEventListener("click", () => {
      const updatedList = favCityList.filter((el) => el !== element);
      localStorage.setItem("favourites", JSON.stringify(updatedList));
      window.location.reload();
    });


    // View button

    view.addEventListener("click", ()=> {

      localStorage.setItem("viewCity", (element));
      document.location.href = "/index.html";

    })

  });
}

