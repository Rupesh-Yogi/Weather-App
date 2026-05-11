// Load header 

fetch("/components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector(".header").innerHTML = data;

    const menuIcon = document.querySelector(".menu_icon");
    const nav = document.querySelector(".midHeader nav ul");
    const darkMode = document.querySelector(".dark_mode");
    const body = document.querySelector("body");

    menuIcon.addEventListener("click", () => {
      nav.classList.toggle("navBar");
    });

    darkMode.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    if (localStorage.getItem("theme") == "dark") {
      document.body.classList.add("dark");
    }
  });


  // loads footer

fetch("/components/footer.html") // fetches the data
  .then((res) => res.text()) // converts into text
  .then((data) => {
    // stores result into data variable
    document.querySelector(".footer").innerHTML = data;
  });
