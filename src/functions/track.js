const track = () => {
  const formTrackElement = document.querySelector(".form__track");
  if (window.location.pathname.split("/")[1] === "lacak") {
    formTrackElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(formTrackElement);

      document.getElementById(
        "result"
      ).innerHTML = ` <div class="modal-background">
      <div class="modal">
        <span class="modal__close" id="closeModal">&times;</span>
        <p class="modal__title">Lacak Pengiriman</p>
        <p>No Resi <b>${data.get("track")}</b></p>
        <p>[Kota Saranjana] Your parcel has been received by sorting center</p>
        <p>[Kota Saranjana] Your parcel has been delivered [Kminchelle Wongso]</p>
      </div>
    </div>`;

      const buttonCloseElement = document.querySelector(".modal__close");
      buttonCloseElement.addEventListener("click", () => {
        document.querySelector(".modal-background").style.display = "none";
      });
    });
  }
};

export default track;
