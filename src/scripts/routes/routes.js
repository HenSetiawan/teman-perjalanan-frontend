import Home from '../views/pages/home';
import Favorit from '../views/pages/favorit';
import Koleksi from '../views/pages/koleksi';
 
const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Favorit,
  '/koleksi': Koleksi,
};
 
export default routes;