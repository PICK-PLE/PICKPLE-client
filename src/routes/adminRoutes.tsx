import { routePath } from '@constants';
import AdminPage from '@pages/admin/page/AdminPage/AdminPage';

import { RouteType } from '@types';

const adminRoutes: RouteType[] = [
  {
    path: routePath.ADMIN,
    element: <AdminPage />,
  },
];

export default adminRoutes;
