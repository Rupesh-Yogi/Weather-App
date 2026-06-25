// For Login and Register Page Switch

const loginPage = document.querySelector(".loginForm");
const gotoRegisterPage = document.querySelector(".goToRegister");
const goToLoginPage = document.querySelector(".goToLogin");
const registerPage = document.querySelector(".registerForm");
// const registerEmail = document.querySelector(".registerEmail");
// const registerPass = document.querySelector(".registerPass");

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

const userDetails = JSON.parse(localStorage.getItem("detailsOfUser")) || [{}];
const loginBtn = document.querySelector(".loginBtn");
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
});

// Variables For login page

// const loginBtn = document.querySelector(".loginBtn");
// const loginInput = document.querySelectorAll(".loginInput");

// const userDetails = JSON.parse(localStorage.getItem("detailsOfUser")) || [{}];
// const savedUserEmail = userDetails.find(e => e.email == LogUserEmail.value);
// const savedUserPass = userDetails.find(p => p.password == logUserPass.value );

// registerInput = document.querySelectorAll(".registerInput");
// registerBtn = document.querySelector("#registerBtn");

// Logic for the login Page

// loginBtn.addEventListener("click", () => {

//   let isFilled = true;

//   loginInput.forEach((element) => {

//   const loginDataError = element.getAttribute("data-login-error");
//   const loginDataErrorId = element.getAttribute("data-login-error-id");
//   const loginErrorElement = document.querySelector(`#${loginDataErrorId}`);

//     if (element.value.trim() == "") {
//       isFilled = false;
//       loginErrorElement.textContent = loginDataError;
//     } else {
//       loginErrorElement.textContent = "";

//       let isContain = true;

//         LogUserEmail = document.querySelector("#logEmail");
//         logUserPass = document.querySelector("#logPassword");

//         if(LogUserEmail == savedUserEmail ){
//           isContain = true;
//         }else{
//           isContain = false;
//           alert("User not found.")
//         }

//         if(logUserPass == savedUserPass){
//           isContain = true;
//         }else{
//           isContain = false;
//           alert("Password Wrong.")
//         }

//     }

//     if (isFilled) {
//       alert("Login Successfull.");
//     } else {
//       alert("Login Failed.");
//     }

//     if(isContain){
//       alert("You are logged in.")
//     }

//   });
// });
