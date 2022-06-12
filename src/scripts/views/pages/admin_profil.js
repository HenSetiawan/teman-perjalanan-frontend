import { getCurrentAdmin } from '../../services/admin-service';
import { adminProfil } from '../template/template-creator';
const adminProfile = {
  async render() {
    return `
        <br><center><h2>PROFIL ADMINISTRATOR</h2></center>
        <hr>
        <div class"container-fluid" id="container"> 
        </div>
      `;
  },

  async afterRender() {
    const admin = await getCurrentAdmin();
    const container = document.querySelector('#container');
    container.innerHTML += adminProfil(admin.admin);
  },
};

export default adminProfile;
