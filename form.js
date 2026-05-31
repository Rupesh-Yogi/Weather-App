const input_of_user = document.querySelectorAll(".userInput");

const submit_btn = document.querySelector(".formSubmit button");

submit_btn.addEventListener("click", () => {
    
  let isValid = true;

  input_of_user.forEach((element) => {
    if (element.value.trim() == "") {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Form submitted successfully"); 

  } else {
    alert("Please complete the form");
  }



});


