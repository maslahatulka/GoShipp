import { rupiah } from "../helpers/rupiah";

const checkPrice = () => {
  if (window.location.pathname.split("/")[1] === "cek-harga") {
    const formElement = document.querySelector(".form");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(formElement);
      const asal = data.get("asal");
      const tujuan = data.get("tujuan");
      const berat = data.get("berat");

      const total = berat * 10000;

      document.getElementById(
        "result"
      ).innerHTML = ` <div class="modal-background">
      <div class="modal">
        <span class="modal__close" id="closeModal">&times;</span>
        <p class="modal__title">Cek Ongkir</p>
        <p class="modal__sub">Asal: ${asal}</p>
        <p class="modal__sub">Tujuan: ${tujuan}</p>
        <p class="modal__sub">Berat: ${berat} Kg</p>
        <p class="modal__total">${rupiah(total)}</p>
      </div>
    </div>`;

      const buttonCloseElement = document.querySelector(".modal__close");
      buttonCloseElement.addEventListener("click", () => {
        document.querySelector(".modal-background").style.display = "none";
      });
    });
  }
};

export default checkPrice;
