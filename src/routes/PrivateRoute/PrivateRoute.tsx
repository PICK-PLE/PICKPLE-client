import { isLoggedIn } from '@utils';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  return isLoggedIn() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
