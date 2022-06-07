import {dataTableWisata} from '../template/template-creator';
import destinationService from '../../services/destination-service';

const dataObjekWisata = {
  async render() {
    return `
        <br><center><h2>LIST DATA OBJEK WISATA</h2></center>
        <hr>

        <div class"container-fluid">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="d-sm-flex align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">List Objek Wisata</h6>
                <div class="d-sm-inline-block">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#tambahObjekWisataModal">
                      Tambah Objek Wisata
                    </button>
                </div>
              </div>                
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr class="text-center">
                            <th scope="col">NOMOR</th>
                            <th scope="col">NAMA</th>
                            <th scope="col">DESKRIPSI</th>
                            <th scope="col">LOKASI</th>
                            <th scope="col">KOTA</th>
                            <th scope="col">OPSI</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>

        <div class="modal fade bd-example-modal-lg" id="tambahObjekWisataModal" tabindex="-1" role="dialog" aria-labelledby="labelModalTambahObjekWisata" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="labelModalTambahObjekWisata">Tambah Objek Wisata</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="row" method="POST" action="">
                  <div class="col-md-12">
                      <label for="namaObjek" class="form-label">Nama Objek Wisata</label>
                      <input type="text" class="form-control" id="namaObjek" name="nama_objek_wisata" required>
                  </div>
                  <div class="col-md-12">
                      <label for="deskripsiObjek" class="form-label">Deskripsi</label>
                      <textarea class="form-control" id="deskripsiObjek" name="deskripsi_objek_wisata" required></textarea>
                  </div>
                  <div class="col-md-12">
                      <label for="kotaObjek" class="form-label">Kota</label>
                      <input type="text" class="form-control" id="kotaObjek" name="kota_objek_wisata" required>
                  </div>
                  <div class="col-md-12">
                      <label for="lokasiObjek" class="form-label">Alamat Objek Wisata</label>
                      <input type="text" class="form-control" id="lokasiObjek" name="lokasi_objek_wisata" required>
                  </div>
                  <div class="col-md-12">
                      <label for="thumbnailObjek" class="form-label">Gambar</label>
                      <input type="file" class="form-control" id="thumbnailObjek" name="thumbnail_objek_wisata" required>
                  </div>                
                  <div class="col-md-7 mt-3">
                      <button class="btn btn-outline-primary" name="submit">Kirim Data</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      `;
  },

  async afterRender() {
    const tableData = document.querySelector("#dataTable");
    const destinations = await destinationService.getAllDestinations();
    destinations.destination.forEach((dataObjek) => {
      let number = 1;
      tableData.innerHTML += dataTableWisata(dataObjek, number);
    });
  },
};

export default dataObjekWisata;