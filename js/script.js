const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const inputLink = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

const formSubmit = (e) => {
  e.preventDefault();
  if (inputLink.value === "") {
    errMsg.innerHTML = "Please enter something";
    inputLink.classList.add("border-red");
  } else if (!validURL(inputLink.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    inputLink.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    inputLink.classList.remove("border-red");
    alert("Success");
  }
};

linkForm.addEventListener("submit", formSubmit);
