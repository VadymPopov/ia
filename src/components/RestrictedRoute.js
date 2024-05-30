import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to={redirectTo} /> : Component;
};
