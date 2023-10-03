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
          window.location.href = "/kirim/";
        } else {
          console.error("Failed to log in. Status code:", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default login;
