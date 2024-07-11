import { Home } from '@pages/home/page/index';
import { RouteType } from '@types';
import { routePath } from '@constants';

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
];

export default homeRoutes;
