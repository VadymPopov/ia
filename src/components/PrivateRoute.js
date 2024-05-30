import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = localStorage.getItem('token');

  return !token ? <Navigate to={redirectTo} /> : Component;
};
