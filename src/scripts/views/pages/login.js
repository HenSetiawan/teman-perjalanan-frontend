const Login = {
  async render() {
    return `
        <center><h2>Login</h2></center>
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="usernameField" placeholder="masukan username kamu" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="masukan password kamu" name="password" required>
                </div>
                <center><button type="submit" class="btn btn-primary">Submit</button></center> 
            </form>
        </div>        
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Login;
