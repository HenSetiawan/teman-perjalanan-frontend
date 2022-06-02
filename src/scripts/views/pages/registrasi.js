const Register = {
    async render() {
      return `
        <br>
        <center><h2>Registasi pengguna baru</h2></center>
        <hr>

        <div class="container">
            <form class="row" method="POST" action="">
                <div class="col-md-6">
                    <label for="nama" class="form-label">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama" name="fullName" required>
                </div>
                <div class="col-md-3">
                    <label for="Username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="Username" name="userName" required>
                </div>
                <div class="col-md-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password" name="passWord" required>
                </div>
                <div class="col-md-12">
                    <label for="Alamat" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="Alamat" name="alamat" required>
                </div>
                <div class="col-md-5">
                    <label for="Nomor_Telpon" class="form-label">Nomor Telpon</label>
                    <input type="text" class="form-control" id="Nomor_Telpon" name="noTelp" required>
                </div>
                <div class="col-md-7">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>                
                <div class="col-md-7 mt-3">
                    <button class="btn btn-outline-primary" name="submit">Kirim Data</button>
                </div>
            </form>
        </div>        
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Register;