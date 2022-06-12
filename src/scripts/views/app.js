// import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    // this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  // kita bisa menginisiasikan komponen lain bila ada

  async renderPage() {
    const token = localStorage.getItem('token');
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (
      url === '/admin_profil' ||
      url === '/data_admin' ||
      url === '/data_objek_wisata'
    ) {
      if (!token) {
        window.location.replace('/#/login');
        return;
      }
    }

    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
