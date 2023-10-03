const register = () => {
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
};

export default register;
