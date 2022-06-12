import config from '../config/config';
const getAllDestinations = async () => {
  try {
    const response = await fetch(`${config.URL_API}/api/v1/destinations`);
    const destinations = await response.json();
    return destinations;
  } catch (error) {
    console.error(error);
  }
};

const getDetailDestination = async (id) => {
  try {
    const response = await fetch(
      `${config.URL_API}/api/v1/destination/${id}`
    );
    const destinations = await response.json();
    return destinations;
  } catch (error) {
    console.error(error);
  }
};

export { getAllDestinations, getDetailDestination };
