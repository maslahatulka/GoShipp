class NavComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<nav class="navbar container">
        <a href="/" class="navbar__logo"><span>Go</span>Shipp </a>

        <section class="navbar__menu">
            <a href="/" class="navbar__menu-item">Beranda</a>
            <a href="/tentang/" class="navbar__menu-item">Tentang</a>
            <a href="/layanan/" class="navbar__menu-item">Layanan</a>
            <a href="/cek-harga/" class="navbar__menu-item">Cek Harga</a>
            <a href="/lacak/" class="navbar__menu-item">Lacak Paket</a>
        </section>

        <section class="navbar__menu-end">
            <div class="navbar__auth">
                <a href="/login/" class="navbar__auth-login">Login</a>
                <a href="/register/" class="navbar__auth-register">Register</a>
            </div>

            <div>
                <button class="hamburger__button">
                    <i class="fa fa-navicon"></i>
                </button>

                <button class="close__button">
                    <i class="fa fa-close"></i>
                </button>
            </div>
        </section>
    </nav>`;
  }
}

customElements.define("nav-component", NavComponent);
