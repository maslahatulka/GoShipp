import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const register = () => {
  if (window.location.pathname.split("/")[1] === "register") {
    const registerFormElement = document.querySelector(".register__form");

    registerFormElement.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(registerFormElement);
      try {
        const response = await fetch(
          "https://be-palembang-21-production.up.railway.app/new",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: data.get("username"),
              password: data.get("password"),
              email: data.get("email"),
            }),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          Toastify({
            text: "Berhasil membuat akun",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
              background: "#6EF063",
            },
          }).showToast();

          setTimeout(() => {
            window.location.href = "/login/";
          }, 3000);
        } else {
          Toastify({
            text: "Gagal membuat akun",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
              background: "rgb(255,0,0)",
            },
          }).showToast();
          console.error("Failed to log in. Status code:", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default register;
