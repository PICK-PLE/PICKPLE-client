import { Login } from '@pages/auth/page/index';
import { RouteType } from '@types';
import { routePath } from '@constants';

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGIN,
    element: <Login />,
  },
];

export default authRoutes;
