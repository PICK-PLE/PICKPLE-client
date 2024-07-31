import { Home } from '@pages/home/page/index';

import { routePath } from '@constants';
import { RouteType } from '@types';

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
];

export default homeRoutes;
