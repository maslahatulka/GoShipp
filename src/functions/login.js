import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const login = () => {
  if (window.location.pathname.split("/")[1] === "login") {
    const loginFormElement = document.querySelector(".login__form");

    loginFormElement.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(loginFormElement);

      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: data.get("username"),
            password: data.get("password"),
          }),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          localStorage.setItem("token", responseData.token);

          Toastify({
            text: "Login Berhasil",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
              background: "#6EF063",
            },
          }).showToast();

          setTimeout(() => {
            window.location.href = "/kirim/";
          }, 3000);
        } else {
          Toastify({
            text: "Login Gagal",
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

export default login;
