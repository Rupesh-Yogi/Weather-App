const input_of_user = document.querySelectorAll(".userInput");

const submit_btn = document.querySelector(".formSubmit button");

submit_btn.addEventListener("click", () => {
  let isValid = true;

  input_of_user.forEach((element) => {
    if (element.hasAttribute("required")) {
      const errorId = element.getAttribute("data-error-id");
      const errorMessage = element.getAttribute("data-error");
      const errorElement = document.querySelector(`#${errorId}`);

      if (element.value.trim() == "") {
        errorElement.textContent = errorMessage;
        isValid = false;
      } else {
        errorElement.textContent = "";
      }
    }
  });

  if (isValid) {
    alert("Form submitted successfully.");
  }
});
