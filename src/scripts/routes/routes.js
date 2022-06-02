import Home from '../views/pages/home';
import Favorit from '../views/pages/favorit';
import Koleksi from '../views/pages/koleksi';
import Login from '../views/pages/login';
import Registasi from '../views/pages/registrasi';
import Detail from '../views/pages/detail'
 
const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Favorit,
  '/koleksi': Koleksi,
  '/login': Login,
  '/registrasi': Registasi,
  '/detail': Detail,
};
 
export default routes;