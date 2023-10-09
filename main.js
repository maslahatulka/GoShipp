import "./src/styles/global.css";
import "./src/styles/tentang/index.css";
import "./src/components/footer";
import "./src/components/nav";
import "./src/components/teams";

import navigationBar from "./src/functions/navigationBar";
import checkPrice from "./src/functions/checkPrice";
import register from "./src/functions/register";
import login from "./src/functions/login";
import setupRouter from "./src/routes";

document.addEventListener("DOMContentLoaded", () => {
  navigationBar();
  checkPrice();
  register();
  login();
  setupRouter();
  fetch("https://be-palembang-21-production.up.railway.app")
    .then((res) => res.json())
    .then((json) => console.log(json));
});
