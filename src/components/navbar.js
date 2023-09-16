const navbar = () => {
  document.querySelector("#navbar").innerHTML = `
  <a href="/" class="navbar__logo"><span>Go</span>Shipp </a>
  
  <ul class="navbar__menu">
    <a href="/" class="navbar__menu-item">Beranda</a>
    <a href="/tentang/" class="navbar__menu-item">Tentang</a>
    <a href="/layanan/" class="navbar__menu-item">Layanan</a>
    <a href="/cek-harga/" class="navbar__menu-item">Cek Harga</a>
    <a href="/lacak/" class="navbar__menu-item">Lacak Paket</a>
    <a href="/contact/" class="navbar__menu-item">Hubungi Kami</a>
    <a href="#" class="navbar__menu-item">KIRIM SEKARANG</a>
  </ul>`;
};

export default navbar;
