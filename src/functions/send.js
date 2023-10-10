import { rupiah } from "../helpers/rupiah";

const send = () => {
  if (window.location.pathname.split("/")[1] === "kirim") {
    const form = document.getElementById("multi-step-form");
    const steps = form.querySelectorAll(".form-step");
    const prevButtons = form.querySelectorAll(".prev-step");
    const nextButtons = form.querySelectorAll(".next-step");

    let currentStep = 0;

    function showStep(stepNumber) {
      steps.forEach((step, index) => {
        if (index === stepNumber) {
          step.classList.add("form-step--active");
        } else {
          step.classList.remove("form-step--active");
        }
      });
    }

    function goToStep(stepNumber) {
      showStep(stepNumber);
      currentStep = stepNumber;
    }

    prevButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentStep > 0) {
          goToStep(currentStep - 1);
        }
      });
    });

    nextButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          goToStep(currentStep + 1);
        }
      });
    });

    form.addEventListener("change", () => {
      //Value Pengirim
      const namaPengirimValueElement =
        document.getElementById("nama_pengirim").value;
      const alamatPengirimValueElement =
        document.getElementById("alamat_pengirim").value;
      const nomorPengirimValueElement =
        document.getElementById("nomor_pengirim").value;
      const emailPengirimValueElement =
        document.getElementById("email_pengirim").value;
      const detailLokasiPengirimValueElement = document.getElementById(
        "detail_lokasi_pengirim"
      ).value;
      //Value Penerima
      const namaPenerimaValueElement =
        document.getElementById("nama_penerima").value;
      const alamatPenerimaValueElement =
        document.getElementById("alamat_penerima").value;
      const nomorPenerimaValueElement =
        document.getElementById("nomor_penerima").value;
      const detailLokasiPenerimaValueElement = document.getElementById(
        "detail_lokasi_penerima"
      ).value;
      //Value Detail Paket
      const ukuranPaketValueElement =
        document.getElementById("ukuran_paket").value;
      const tipeLayananValueElement =
        document.getElementById("tipe_layanan").value;

      // Pembatas
      const detailSenderElement = document.querySelector(".detail__sender");

      detailSenderElement.innerHTML = `
      <div
          class="detail__sender-left"
        >
          <h3>Pengirim : ${namaPengirimValueElement}</h3>
          <h3>No. Telepon : ${nomorPengirimValueElement}</h3>
          <h3>Email : ${emailPengirimValueElement}</h3>
        </div>

        <div class="detail__sender-right">Alamat Pengirim : ${alamatPengirimValueElement}</div>`;

      const detailReceiverElement = document.querySelector(".detail__receiver");

      detailReceiverElement.innerHTML = `
      <div
          class="detail__receiver-left"
        >
          <h3>Nama Penerima : ${namaPenerimaValueElement}</h3>
          <h3>No. Telepon : ${nomorPenerimaValueElement}</h3>
        </div>

        <div class="detail__receiver-right">Alamat Penerima : ${alamatPenerimaValueElement}</div>`;

      const detailPackageElement = document.querySelector(".detail__package");
      detailPackageElement.innerHTML = `
      <div
        class="detail__package-left"
      >
        <h3>Ukuran Paket : ${ukuranPaketValueElement} Kg</h3>
        <h3>Tipe Layanan : ${tipeLayananValueElement}</h3>
      </div>`;

      const detailTotalElement = document.querySelector(".detail__payment");
      detailTotalElement.innerHTML = ` <div
        class="detail__payment-left"
      >
        <h3>Total Pengiriman : ${rupiah(ukuranPaketValueElement * 10000)}</h3>
        <h3>Biaya Proteksi : ${rupiah(2000)}</h3>
        <hr />
        <h3>Total Pembayaran: ${rupiah(
          ukuranPaketValueElement * 10000 + 2000
        )} </h3>
      </div>`;
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("selesai");
    });

    showStep(currentStep);
  }
};

export default send;
