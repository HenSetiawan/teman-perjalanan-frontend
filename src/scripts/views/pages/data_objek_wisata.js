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
                    <a class="btn btn-sm btn-primary" href="#">Tambah Objek Wisata</a>
                </div>
              </div>                
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                            <th scope="col">NOMOR</th>
                            <th scope="col">NAMA OBJEK WISATA</th>
                            <th scope="col">LOKASI</th>
                            <th scope="col">OPSI</th>
                        </tr>
                        <tr>
                            <td class="text-center">1</td>
                            <td>Curug Putri Pandeglang</td>
                            <td>Sukarame, Kec. Carita, Kabupaten Pandeglang, Banten</td>
                            <td>                              
                              <a href="#" class="btn btn-sm btn-warning">Edit</a>
                              <a href="#" class="btn btn-sm btn-danger">Hapus</a>
                            </td>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default dataObjekWisata;