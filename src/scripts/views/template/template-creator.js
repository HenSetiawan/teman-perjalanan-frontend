/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const createCard = (data) => ` <div class="col-md-4 col-lg-4 col-sm-6 mb-2">
    <div class="card travel-card">
      <img
        src="${data.thumbail}"
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

// data untuk tabel objek wisata pada halaman data_objek_wisata
const dataTableWisata = (dataObjek, number) => `
  <tr>
    // eslint-disable-next-line no-plusplus
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
`;

// data admin untuk tabel admin pada halaman data_admin
const dataTableAdmin = (admins, number) => `
  <tr>
    <td>${admins.name}</td>
    <td>${admins.username}</td>
    <td>${admins.email}</td>
    <td>                              
      <button class="btn btn-sm btn-warning edit" data-id=${admins.id}>Edit</Button>
      <a href="#" class="btn btn-sm btn-danger">Hapus</a>
    </td>
  </tr>
`;

const detailDestination = (
  destination,
) => `<div class="card travel-card detail-card">
<img
  src="${destination.thumbail}"
  class="detail-img image-responsive"
  alt="${destination.name}"
/>
<div class="card-body">
  <h5 class="card-title text-center">
    ${destination.name}
  </h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      ${destination.description}
    </li>
    <li class="list-group-item">
      <div class="location mt-4">
          <i class="fa fa-map-marker stop mt-2"></i> ${destination.city}
          <p>${destination.address}</p>                  
      </div>
    </li>
  </ul>
</div>
</div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const adminProfil = (data) => `
  <div class="row gutters-sm">
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
            <div class="mt-3">
              <h4>${data.name}</h4>
              <p class="text-secondary mb-1"></p>
              <p class="text-muted font-size-sm">${data.no_telp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Full Name</h6>
            </div>
            <div class="col-sm-9 text-secondary">${data.name}</div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">${data.email}</div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Nomor Telpon</h6>
            </div>
            <div class="col-sm-9 text-secondary">${data.no_telp}</div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Alamat</h6>
            </div>
            <div class="col-sm-9 text-secondary">${data.alamat}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="float-right">
          <a href="#/data_admin" class="btn btn-primary">Data Admin</a>
          <a href="#/data_objek_wisata" class="btn btn-success">Data Objek Wisata</a>
      </div>
    </div>
  </div>
`;

export {
  createCard,
  dataTableWisata,
  dataTableAdmin,
  detailDestination,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  adminProfil,
};
