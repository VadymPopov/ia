import { Navigate } from 'react-router-dom';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = localStorage.getItem('token');

  return !token ? <Navigate to={redirectTo} /> : Component;
};
