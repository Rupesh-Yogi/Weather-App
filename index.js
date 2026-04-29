

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

fetch("/components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector(".footer").innerHTML = data;
    // document.body.style.visibility = "visible";
  });
