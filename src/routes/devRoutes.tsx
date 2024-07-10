import Dev from '@pages/dev/Dev';
import { RouteType } from '../types/routeType';
import { routePath } from '@constants';

const devRoutes: RouteType[] = [
  {
    path: routePath.DEV,
    element: <Dev />,
  },
];

export default devRoutes;
