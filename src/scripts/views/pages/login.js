import { loginAdmin } from '../../services/admin-service';

const Login = {
  async render() {
    return `
    <div class="row mt-5">
    <div class="col-lg-6 col-sm-12 mx-auto">
      <section class="form-group">
        <h1>WELCOME BACK</h1>
        <form action="POST" class="mt-5">
          <p class="input-label">Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              aria-label="Username"
              required
              placeholder="hendysetiawan"
            />
          </div>
          <p class="input-label">Password</p>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              aria-label="Username"
              id="password"
              required
              placeholder="********"
            />
          </div>
          <div class="input-group mb-3 mt-4">
            <button type="submit" class="form-control btn-login">
              Sign In
            </button>
          </div>
        </form>
      </section>
    </div>
    </div>
  </div>       
      `;
  },

  async afterRender() {
    const btnLogin = document.querySelector('.btn-login');
    btnLogin.addEventListener('click', async (e) => {
      e.preventDefault();
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
      const token = await loginAdmin(username, password);
      if (token) {
        localStorage.setItem('token', token);
        window.location.replace('/#/admin_profil');
      }
    });
  },
};

export default Login;
