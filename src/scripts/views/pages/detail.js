/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import { getDetailDestination } from '../../services/destination-service';
import { detailDestination } from '../template/template-creator';

const Detail = {
  async render() {
    return `
        <div class="container">
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const destination = await getDetailDestination(id);
    const container = document.querySelector('.container');
    console.log(destination);
    container.innerHTML += detailDestination(destination.destination[0]);
  },
};

export default Detail;
