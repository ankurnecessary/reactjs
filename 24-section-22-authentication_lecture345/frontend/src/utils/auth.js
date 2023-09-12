import { redirect } from 'react-router-dom';

export const getTokenDuration = () => {
  const now = new Date().getTime();
  const expiration = new Date(localStorage.getItem('expiration')).getTime();
  const duration = expiration - now;
  return duration;
}

export const getAuthorizationToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export const tokenLoader = () => {
  return getAuthorizationToken();
}

export const checkAuthLoader = () => {
  if (!getAuthorizationToken()) {
    return redirect('/auth')
  }
  return null;
}
