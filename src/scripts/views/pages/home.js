import { createCard } from '../template/template-creator';
import { getAllDestinations } from '../../services/destination-service';
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
    <div class="row travel-section mt-5">
    <div class="col-lg-12">
      <h2 class="text-center">Telusuri tempat baru</h2>
      <p class="text-secondary text-center">
          Temukan berbagai tempat menarik yang bisa anda kunjungi
        </p>
    </div>
    </div>

    <div class="row mt-2 list-travel">
    </div>
      `;
  },

  async afterRender() {
    const listTravelContainer = document.querySelector('.list-travel');
    const destinations = await getAllDestinations();
    destinations.destination.forEach((destination) => {
      listTravelContainer.innerHTML += createCard(destination);
    });
  },
};

export default Home;
