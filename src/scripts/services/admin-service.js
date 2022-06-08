const getAllAdmin = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch('http://localhost:3000/api/v1/admins', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const destinations = await response.json();
    return destinations;
  } catch (error) {
    console.error(error);
  }
};

const loginAdmin = async (username, password) => {
  const data = { username: username, password: password };
  try {
    const response = await fetch(
      'http://localhost:3000/api/v1/auth/admin/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (result.token) {
      return result.token;
    } else {
      return 'failed';
    }
  } catch (error) {
    console.error(error);
  }
};

export { getAllAdmin, loginAdmin };
