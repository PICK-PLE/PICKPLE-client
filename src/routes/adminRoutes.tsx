import { RouteType } from '@types';
import { routePath } from '@constants';
import HostSubmitter from '@pages/admin/page/HostSubmitter/HostSubmitter';

const adminRoutes: RouteType[] = [
  {
    path: routePath.ADMIN,
    element: <HostSubmitter />,
  },
];

export default adminRoutes;