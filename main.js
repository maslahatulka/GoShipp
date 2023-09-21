import { displayTeams } from "/src/modules/displayTeams";
import { displayFooter } from "/src/modules/displayFooter";
import { rupiah } from "./src/helpers/rupiah";

displayFooter(document.querySelector(".footer"));

const hamburgerELement = document.querySelector(".hamburger__button");
const closeELement = document.querySelector(".close__button");
const navbarMenuElement = document.querySelector(".navbar__menu");

hamburgerELement.addEventListener("click", () => {
  navbarMenuElement.style.cssText = `
  left: 0;
  `;
  closeELement.style.display = "block";
  hamburgerELement.style.display = "none";
});

closeELement.addEventListener("click", () => {
  navbarMenuElement.style.cssText = `
  left: 100%;
  `;

  closeELement.style.display = "none";
  hamburgerELement.style.display = "block";
});

if (window.location.pathname.split("/")[1] === "tentang") {
  displayTeams(document.querySelector(".management__cards"));
}

if (window.location.pathname.split("/")[1] === "cek-harga") {
  const formElement = document.querySelector(".form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(formElement);
    const asal = data.get("asal");
    const tujuan = data.get("tujuan");
    const berat = data.get("berat");

    const total = berat * 10000;

    document.getElementById("result").innerHTML = ` <div class="modal-background">
      <div class="modal">
        <span class="modal__close" id="closeModal">&times;</span>
        <p class="modal__title">Cek Ongkir</p>
        <p class="modal__sub">Asal: ${asal}</p>
        <p class="modal__sub">Tujuan: ${tujuan}</p>
        <p class="modal__sub">Berat: ${berat} Kg</p>
        <p class="modal__total">${rupiah(total)}</p>
      </div>
    </div>`;

    const buttonCloseElement = document.querySelector(".modal__close");
    buttonCloseElement.addEventListener("click", () => {
      document.querySelector(".modal-background").style.display = "none";
    });
  });
}

if (window.location.pathname.split("/")[1] === "register") {
  const registerFormElement = document.querySelector(".register__form");
  registerFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(registerFormElement);

    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.get("name"),
        password: data.get("password"),
        email: data.get("email"),
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  });
}
