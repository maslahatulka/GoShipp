const register = () => {
  if (window.location.pathname.split("/")[1] === "register") {
    const registerFormElement = document.querySelector(".register__form");
    registerFormElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(registerFormElement);

      fetch("https://be-palembang-21-production.up.railway.app/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.get("username"),
          password: data.get("password"),
          email: data.get("email"),
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    });
  }
};

export default register;
