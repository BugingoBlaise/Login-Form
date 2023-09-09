let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let loginBtn = document.getElementById("loginBtn");
const emailerror = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

/*
//Switch Bars from sign Up to Sign In
signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  loginBtn.innerHTML = "Login";
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  loginBtn.innerHTML = "Sign Up";
};
*/

//Email validation
function emailValidation() {
  var email = document.getElementById("contact-email").value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  //   /^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid Email !";
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

//Registration Form
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
//Name Validation
function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
//Phone number validation
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please!";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
//Email Validation
function validateEmail() {
  var email = document.getElementById("contact-email").value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  //   /^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid Email !";
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}
//message validation
function validateMessage() {
  const message = document.getElementById("contact-message").value;

  const required = 30;
  const left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required ";
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName || !validatePhone || !validateEmail || !validateMessage) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
