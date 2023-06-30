let firstName = document.getElementById("first-name");
let firstNameMsg = document.querySelector(".first-name-msg");
let lastName = document.getElementById("last-name");
let lastNameMsg = document.querySelector(".last-name-msg");
let email = document.getElementById("email");
let emailMsg = document.querySelector(".email-msg");
let password = document.getElementById("password");
let passwordMsg = document.querySelector(".password-msg");
let phone = document.getElementById("telephone");
let phoneMsg = document.querySelector(".phone-msg");
let bio = document.getElementById("bio");
let bioMsg = document.querySelector(".bio-msg");

let inputs = document.querySelectorAll("input");
let submit = document.querySelector(".submit");



const patterns = {
  "first-name": {
    pattern: /^[a-zA-Z0-9]{3,16}$/,
    message: "First name must be alphanumeric and contains 3-16 characters",
    msgContainer: firstNameMsg,
  },
  "last-name": {
    pattern: /^[a-zA-Z0-9]{3,16}$/,
    message: "Last name must be alphanumeric and contains 3-16 characters",
    msgContainer: lastNameMsg,
  },
  email: {
    pattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Email must be a valid address, e.g. example@example.com",
    msgContainer: emailMsg,
  },
  password: {
    pattern: /^[a-zA-Z0-9@_-]{6,20}$/,
    message:
      "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters",
    msgContainer: passwordMsg,
  },
  telephone: {
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    message: "A valid Telephone number (11 digits and 333-333-3334)",
    msgContainer: phoneMsg,
  },
  bio: {
    pattern: /^[a-z_-]{8,50}$/,
    message:
      "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters",
    msgContainer: bioMsg,
  },
};


function validateInput(input) {
  const { pattern, message, msgContainer } = patterns[input.name];
  if (!pattern.test(input.value)) {
    msgContainer.textContent = message;
  } else {
    msgContainer.textContent = "";
  }

  if(input === email) {
    if (input.value) {
        input.style.backgroundColor = '#B3E7F2';
    } else {
        input.style.backgroundColor = '';
    }
  }
  if(input === telephone) {
    if (input.value) {
        input.style.backgroundColor = '#B3E7F2';
    } else {
        input.style.backgroundColor = '';
    }
  }

  if (input.value) {
    input.style.border = "2px solid #03A64A";
    submit.style.backgroundColor = '#03A64A';
  } else if (!input.value) {
    input.style.border = "";
    submit.style.backgroundColor = '';
  }
}



submit.addEventListener("click", function (event) {
  event.preventDefault();

  inputs.forEach((input) => {
    validateInput(input);
  });
});

