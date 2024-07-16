export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const isAuthenticated = () => {
  return getToken() ? true : false;
};
