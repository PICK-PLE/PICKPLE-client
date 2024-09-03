import { routePath } from '@constants';
import HostInfoPage from '@pages/host/page/HostInfoPage/HostInfoPage';
import { HostApplyPage, HostMyClass, MyClassManage } from '@pages/host/page/index';

import { RouteType } from '@types';

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
  {
    path: routePath.HOST_INFO,
    element: <HostInfoPage />,
  },
];

export default hostRoutes;
