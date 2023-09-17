import { displayTeams } from "/src/modules/displayTeams";

displayTeams(document.querySelector(".management__cards"));

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
