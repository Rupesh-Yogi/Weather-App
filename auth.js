// For Login and Register Page Switch

const loginPage = document.querySelector(".loginForm");
const gotoRegisterPage = document.querySelector(".goToRegister");
const goToLoginPage = document.querySelector(".goToLogin");
const registerPage = document.querySelector(".registerForm");

// To go to Register Page

gotoRegisterPage.addEventListener("click", () => {
  loginPage.style.display = "none";
  registerPage.style.display = "block";
});

// For goto Login Page

goToLoginPage.addEventListener("click", () => {
  loginPage.style.display = "block";
  registerPage.style.display = "none";
});

// Logic for Login Page

const loginBtn = document.querySelector("#loginBtn");
const loginInput = document.querySelectorAll(".loginInput");

loginBtn.addEventListener("click", () => {
  let isValid = true;

  loginInput.forEach((element) => {
    const loginDataError = element.getAttribute("data-login-error"); // pls enter ..
    const loginDataErrorId = element.getAttribute("data-login-error-id"); // loginEmailError
    const loginErrorElement = document.querySelector(`#${loginDataErrorId}`);

    if (element.value.trim() == "") {
      isValid = false;
      loginErrorElement.textContent = loginDataError;
    } else {
      loginErrorElement.textContent = "";
    }
  });

  if (isValid) {
    const userEnteredEmail = document.querySelector("#logEmail").value.trim();
    const userEnteredPass = document.querySelector("#logPassword").value.trim();
    const userDetails = JSON.parse(localStorage.getItem("detailsOfUser")) || [];
    const savedUserEmail = userDetails.find((e) => e.email == userEnteredEmail);

    // ------- OPTIONAL CODE -------------{

    // if (userEnteredEmail == savedUserEmail) {
    //   if (savedUserEmail.password == userEnteredPass) {
    //     alert("Login Successfull");
    //   } else {
    //     alert("Password Incorrect");
    //   }
    // } else {
    //   alert("User donot found. Please register first!");
    // }

    // }

    if (!savedUserEmail) {
      alert("User donot found. Please register first!");
    } else if (savedUserEmail.password == userEnteredPass) {
      alert("Login Successfull");
      document.location.href = "index.html";
    } else {
      alert("Password Incorrect");
    }
  }
});

// Logic For Register Page

const registerInput = document.querySelectorAll(".registerInput");
const registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", () => {
  let isValid = true;

  registerInput.forEach((element) => {
    const registerErrorMessage = element.getAttribute("data-register-error");
    const registerErrorId = element.getAttribute("data-register-error-id");
    const registerErrorElement = document.querySelector(`#${registerErrorId}`);

    if (element.value.trim() == "") {
      isValid = false;
      registerErrorElement.textContent = registerErrorMessage;
    } else {
      registerErrorElement.textContent = "";
    }
  });

  if (isValid) {
    const userDetails = JSON.parse(localStorage.getItem("detailsOfUser")) || [];

    const regUserEmail = document.querySelector("#registerEmail").value.trim();
    const regUserPassword = document
      .querySelector("#registerPassword")
      .value.trim();

    const existingUser = userDetails.find((e) => e.email == regUserEmail);

    if (existingUser) {
      alert("Already registered! Please login.");
    } else {
      const newUser = {
        email: regUserEmail,
        password: regUserPassword,
      };

      userDetails.push(newUser);

      localStorage.setItem("detailsOfUser", JSON.stringify(userDetails));

      alert("Registered Successfully");

      // To redirect to Login Page

      const registerPage = document.querySelector(".registerForm");
      const loginPage = document.querySelector(".loginForm");

      registerPage.style.display = "none";
      loginPage.style.display = "block";
    }
  }
});
