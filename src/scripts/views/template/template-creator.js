const createCard = (data) => {
  return ` <div class="col-md-4 col-lg-4 col-sm-6 mb-2">
    <div class="card travel-card">
      <img
        src="./images/hero.png"
        class="card-img-top"
        alt="${data.name}"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${data.name}
        </h5>
        <p class="card-text">
          ${data.description}
        </p>
        <a href="#/detail/${data.id}">Detail <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>`;
};


export {createCard}