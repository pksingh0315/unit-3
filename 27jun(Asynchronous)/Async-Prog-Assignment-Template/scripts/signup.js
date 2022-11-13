//get credential and store into an object
//store data in localstorage
//verify data befor submit

const form = document.getElementById("credential");
const nameElem = document.getElementById("name");
const numberElem = document.getElementById("number");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");

const credential = {};

let canSubmit = true;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  credential.name = nameElem.value;
  credential.number = numberElem.value;
  credential.email = emailElem.value;
  credential.password = passwordElem.value;

  let keys = Object.keys(credential);
  for (let key in credential) {
    if (!credential[key]) {
      alert(`Please enter ${key}.`);
      canSubmit = false;
      break;
    }
  }

  if (!canSubmit) {
    return;
  }

  localStorage.setItem("credential", JSON.stringify(credential));
  window.location = "./login.html";
});
