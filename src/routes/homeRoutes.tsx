import { Home } from '@pages/home/page/index';
import { RouteType } from '../types/routeType';
import { routePath } from '@constants';

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
];

export default homeRoutes;
