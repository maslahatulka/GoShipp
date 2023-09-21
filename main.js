import { displayTeams } from "/src/modules/displayTeams";
import { displayFooter } from "/src/modules/displayFooter";

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

    document.getElementById("result").innerHTML = `<section class="modal">
      <button id="close_modal">close</button>
      <h1>Harga Ongkir</h1>
      <div>
        <p>Asal: ${asal}</p>
        <p>Tujuan: ${tujuan}</p>
        <p>Berat: ${berat} kg</p>
      </div>
      <h1>Rp. ${total}</h1>
    </section>`;
  });
}

const buttonCloseElement = document.getElementById("close_modal");

// document.addEventListener("DOMContentLoaded", function () {
//   buttonCloseElement.addEventListener("click", () => console.log("hola"));
// });

window.addEventListener("load", () => {
  buttonCloseElement.addEventListener("click", () => {
    console.log("hai");
  });
});
