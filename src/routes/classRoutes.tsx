import { GuestMyClass } from '@pages/guest/page/index';
import { RouteType } from '../types/routeType';
import { routePath } from '@constants';

const classRoutes: RouteType[] = [
  {
    path: routePath.GUEST_MY_CLASS,
    element: <GuestMyClass />,
  },
];

export default classRoutes;