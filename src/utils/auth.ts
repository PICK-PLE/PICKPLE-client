export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const isLoggedIn = () => {
  return getToken() ? true : false;
};
