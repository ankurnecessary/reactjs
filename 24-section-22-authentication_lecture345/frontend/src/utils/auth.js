export const getAuthorizationToken = () => {
  const token = localStorage.getItem('token');
  return token;
}

export const tokenLoader = () => {
  return getAuthorizationToken();
}
