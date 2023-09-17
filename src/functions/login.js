const loginFormElement = document.getElementById("login");
const sendButtonElement = document.getElementById("kirim");
const navbarMenu = document.querySelector(".navbar__menu");

loginFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(loginFormElement);
  const email = data.get("email");
  const password = data.get("password");

  window.location.replace("/kirim/");

  localStorage.setItem("email", email);
});
