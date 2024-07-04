import { Dev } from '@pages';
import { RouteType } from '../types/routeType';
import routePath from './routePath';

const devRoutes: RouteType[] = [
  {
    path: routePath.DEV,
    element: <Dev />,
  },
];

export default devRoutes;
