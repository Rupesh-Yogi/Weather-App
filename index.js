    // Menu Icon

const menuIcon = document.querySelector(".menu_icon");
const nav = document.querySelector(".midHeader nav ul");

menuIcon.addEventListener("click", ()=> {
    nav.classList.toggle("navBar");
})

    // Dark Mode

const darkMode = document.querySelector(".dark_mode");
const body = document.querySelector("body");

darkMode.addEventListener("click", ()=> {
    body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
})

        if (localStorage.getItem("theme") == "dark") {
            document.body.classList.add("dark");
        }