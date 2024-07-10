import { HostApply, HostMyClass, MyClassManage } from '@pages/host/page/index';
import { RouteType } from '../types/routeType';
import { routePath } from '@constants';

const hostRoutes: RouteType[] = [
  {
    path: routePath.HOST_APPLY,
    element: <HostApply />,
  },
  {
    path: routePath.HOST_MY_CLASS,
    element: <HostMyClass />,
  },
  {
    path: routePath.HOST_MY_CLASS_MANAGE,
    element: <MyClassManage />,
  },
];

export default hostRoutes;
