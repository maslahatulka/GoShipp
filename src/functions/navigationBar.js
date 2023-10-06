const navigationBar = () => {
  const hamburgerELement = document.querySelector(".hamburger__button");
  const closeELement = document.querySelector(".close__button");
  const navbarMenuElement = document.querySelector(".navbar__menu");
  const navbarAuthElement = document.querySelector(".navbar__auth");
  const logoutButtonElement = document.querySelector(".navbar__auth-logout");

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

  logoutButtonElement.addEventListener("click", () => {
    localStorage.removeItem("token");
    location.reload();
  });

  const isAuth = localStorage.getItem("token");

  if (isAuth) {
    logoutButtonElement.style.display = "block";
    navbarAuthElement.style.display = "none";
  }
};

export default navigationBar;
