import { Login, Redirection } from '@pages/auth/page/index';
import { RouteType } from '@types';
import { routePath } from '@constants';

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGIN,
    element: <Login />,
  },
  {
    path: routePath.KAKAO_REDIRECTION,
    element: <Redirection />,
  },
];

export default authRoutes;
