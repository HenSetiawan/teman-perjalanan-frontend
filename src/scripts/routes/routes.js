import Home from '../views/pages/home';
import Favorit from '../views/pages/favorit';
import Koleksi from '../views/pages/koleksi';
import Login from '../views/pages/login';
import Detail from '../views/pages/detail';
import adminProfile from '../views/pages/admin_profil';
import dataAdmin from '../views/pages/data_admin';
import dataObjekWisata from '../views/pages/data_objek_wisata';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Favorit,
  '/koleksi': Koleksi,
  '/login': Login,
  '/detail/:id': Detail,
  '/admin_profil': adminProfile,
  '/data_admin': dataAdmin,
  '/data_objek_wisata': dataObjekWisata,
};
export default routes;