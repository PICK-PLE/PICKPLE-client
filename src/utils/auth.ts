export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const isLoggedIn = () => {
  return getToken() ? true : false;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
