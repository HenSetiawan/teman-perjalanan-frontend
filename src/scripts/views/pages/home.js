const Home = {
  async render() {
    return `
      <div class="row mt-5 hero-section">
      <div class="col-lg-6">
        <h1 class="mt-5">Mulai <span>perjalanan</span> mengagumkan anda dari sini.</h1>
        <p class="text-secondary">
          Telusuri berbagai tempat wisata menarik bersama orang terdekat anda
        </p>
      </div>
      <div class="col-lg-6">
        <img
          src="./images/hero.png"
          alt="traveller"
          class="img-responsive hero-image"
        />
      </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
