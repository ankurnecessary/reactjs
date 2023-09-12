import { redirect } from 'react-router-dom';

export const getAuthorizationToken = () => {
  const token = localStorage.getItem('token');
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
