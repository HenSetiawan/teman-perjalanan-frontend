const createCard = (data) => {
  return ` <div class="col-md-4 col-lg-4 col-sm-6 mb-2">
    <div class="card travel-card">
      <img
        src="http://localhost:3000/public/${data.thumbail}"
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

// data untuk tabel objek wisata pada halaman data_objek_wisata
const dataTableWisata = (dataObjek, number) => `
  <tr>
    <td class="text-center">${number++}</td>
    <td>${dataObjek.name}</td>
    <td>${dataObjek.description}</td>
    <td>${dataObjek.address}</td>
    <td>${dataObjek.city}</td>
    <td>                              
      <a href="#" class="btn btn-sm btn-warning">Edit</a>
      <a href="#" class="btn btn-sm btn-danger">Hapus</a>
    </td>
  </tr>
` 


// data admin untuk tabel admin pada halaman data_admin
const dataTableAdmin = (admins, number) => `
  <tr>
    <td>${admins.name}</td>
    <td>${admins.email}</td>
    <td>${admins.number_phone}</td>
    <td>                              
      <a href="#" class="btn btn-sm btn-warning">Edit</a>
      <a href="#" class="btn btn-sm btn-danger">Hapus</a>
    </td>
  </tr>
`



export {createCard, dataTableWisata}