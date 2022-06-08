import Home from '../views/pages/home';
import Favorit from '../views/pages/favorit';
import Koleksi from '../views/pages/koleksi';
import Login from '../views/pages/login';
import Registasi from '../views/pages/registrasi';
import Detail from '../views/pages/detail'
import userProfile from '../views/pages/user_profil'
import adminProfile from '../views/pages/admin_profil'
import dataAdmin from '../views/pages/data_admin'
import dataObjekWisata from '../views/pages/data_objek_wisata'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Favorit,
  '/koleksi': Koleksi,
  '/login': Login,
  '/registrasi': Registasi,
  '/detail/:id': Detail,
  '/user_profil': userProfile,
  '/admin-profil': adminProfile,
  '/data-admin': dataAdmin,
  '/data-objek_wisata': dataObjekWisata,
};
 
export default routes;