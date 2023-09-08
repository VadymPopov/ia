import useAuth  from 'hooks/useAuth';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? <Outlet/> : <Navigate to='/login' state={{ from: location}} replace/>;
};
