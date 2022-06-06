exports.getAllDestinations = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/destinations');
    const destinations = await response.json();
    return destinations;
  } catch (error) {
    console.error(error);
  }
};
