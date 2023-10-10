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
import track from "./src/functions/track";
import send from "./src/functions/send";

document.addEventListener("DOMContentLoaded", () => {
  navigationBar();
  checkPrice();
  register();
  login();
  setupRouter();
  track();
  send();
});
