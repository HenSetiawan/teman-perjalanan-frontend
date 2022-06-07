const Detail = {
    async render() {
      return `
        <div class="container">
          <div class="card travel-card">
            <img
              src="./images/hero.png"
              class="card-img-top"
              alt="image travel"
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                Raja Ampat
              </h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique ut neque ac convallis. Vivamus nec ligula at ipsum iaculis eleifend. Cras venenatis sodales neque eget venenatis. Pellentesque at aliquam risus. Cras dignissim nisl ut mi auctor, vel mollis magna accumsan. Maecenas id nulla vitae ligula pretium pretium. Etiam consequat libero id ligula gravida, at commodo lacus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </li>
                <li class="list-group-item">
                  <div class="location mt-4">
                      <span><i class="fa fa-map-marker stop mt-2"></i> <small class="text-truncate ml-2"><strong>Kota Raja Ampat</strong></small> </span>  
                      <p>Alamat Raja Ampat</p>                  
                  </div>
                </li>
                <li class="list-group-item">
                <small class="text-muted">
                  Last updated 3 mins ago
                </small>
                </li>
              </ul>
              <p class="card-text text-justify">
                
              </p>      
            </div>
          </div>
        </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Detail;