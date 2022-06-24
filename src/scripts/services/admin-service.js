import config from '../config/config';
const token = localStorage.getItem('token');

const getAllAdmin = async () => {
  try {
    const response = await fetch(`${config.URL_API}/api/v1/admins`, {
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

const getCurrentAdmin = async () => {
  try {
    const response = await fetch(`${config.URL_API}/api/v1/admin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const admin = response.json();
    return admin;
  } catch (error) {
    console.error(error);
  }
};

const loginAdmin = async (username, password) => {
  const data = { username: username, password: password };
  try {
    const response = await fetch(`${config.URL_API}/api/v1/auth/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
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

const deleteAdmin = async (id) => {
  try {
    const response = await fetch(`${config.URL_API}/api/v1/admin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const admin = await response.json();
    return admin;
  } catch (error) {
    console.error(error);
  }
};

const addNewAdmin = async (data) => {
  try {
    const response = await fetch(`${config.URL_API}/api/v1/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result) {
      return result;
    } else {
      return 'failed';
    }
  } catch (error) {
    console.error(error);
  }
};

const updateAdmin = async (data, id) => {
  try {
    const response = await fetch(`${config.URL_API}/api/v1/admin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result) {
      return result;
    } else {
      return 'failed';
    }
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllAdmin,
  loginAdmin,
  getCurrentAdmin,
  deleteAdmin,
  addNewAdmin,
  updateAdmin,
};
