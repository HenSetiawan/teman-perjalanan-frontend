import { dataTableAdmin } from '../template/template-creator';
import { getAllAdmin, deleteAdmin } from '../../services/admin-service';

const dataAdmin = {
  async render() {
    return `
        <br><center><h2>DATA ADMIN</h2></center>
        <hr>

        <div class"container-fluid">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="d-sm-flex align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Daftar Administrator</h6>
                <div class="d-sm-inline-block">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalTambahAdmin">
                      Create new administrator
                    </button>
                </div>
              </div>                
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                            <th scope="col">NAMA ADMIN</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">EMAIL</th>
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

        <div class="modal fade bd-example-modal-lg" id="modalTambahAdmin" tabindex="-1" role="dialog" aria-labelledby="labelModalTambahAdmin" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="labelModalTambahAdmin">Create new administrator</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="row" method="POST" action="">
                  <div class="col-md-6">
                      <label for="namaAdmin" class="form-label">Nama</label>
                      <input type="text" class="form-control" id="namaAdmin" name="nama" required>
                  </div>
                  <div class="col-md-6">
                      <label for="EmailAdmin" class="form-label">Email</label>
                      <input type="email" class="form-control" id="EmailAdmin" name="email" required>
                  </div>
                  <div class="col-md-6">
                      <label for="usernameAdmin" class="form-label">Username</label>
                      <input type="text" class="form-control" id="usernameAdmin" name="username" required>
                  </div>
                  <div class="col-md-6">
                      <label for="passwordAdmin" class="form-label">Password</label>
                      <input type="text" class="form-control" id="passwordAdmin" name="password" required>
                  </div>               
                  <div class="col-md-6 mt-3">
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
    const tableData = document.querySelector('#dataTable');
    const data = await getAllAdmin();
    data.admins.forEach((admin) => {
      tableData.innerHTML += dataTableAdmin(admin);
    });

    const btnEdit = document.querySelectorAll('.edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        deleteAdmin(id);
        data.admins.forEach((admin) => {
          tableData.innerHTML = dataTableAdmin(admin);
        });
      });
    });
  },
};

export default dataAdmin;
