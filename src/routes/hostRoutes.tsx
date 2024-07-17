import { HostApplyPage, HostMyClass, MyClassManage } from '@pages/host/page/index';
import { RouteType } from '@types';
import { routePath } from '@constants';

const hostRoutes: RouteType[] = [
  {
    path: routePath.HOST_APPLY,
    element: <HostApplyPage />,
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
