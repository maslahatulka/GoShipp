const formElement = document.querySelector(".form");
const resultElement = document.querySelector("#result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(formElement);
  const userFrom = data.get("asal");
  const userDestination = data.get("tujuan");
  const userWeight = data.get("berat");

  const calculatePrice = userWeight * 5000;

  resultElement.innerHTML = `
  <section>
    <h1>Kota Asal: ${userFrom}</h1>
    <h1>Kota Tujuan: ${userDestination}</h1>
    <h1>Harga Ongkir: ${calculatePrice} </h1>
  </section>
  `;
});
