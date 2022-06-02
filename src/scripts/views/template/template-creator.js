const createCard = (data) => {
  return ` <div class="col-md-4 col-lg-4 col-sm-6 mb-2">
    <div class="card travel-card">
      <img
        src="./images/hero.png"
        class="card-img-top"
        alt="image travel"
      />
      <div class="card-body">
        <h5 class="card-title">
          Raja Ampat
        </h5>
        <p class="card-text">
          Raja Ampat adalah salah satu objek wisata paling indah yang ada di Indonesia...
        </p>
        <a href="#">Detail <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>`;
};


export {createCard}