import HostSubmitter from '@pages/admin/page/HostSubmitter/HostSubmitter';

import { routePath } from '@constants';
import { RouteType } from '@types';

const adminRoutes: RouteType[] = [
  {
    path: routePath.ADMIN,
    element: <HostSubmitter />,
  },
];

export default adminRoutes;