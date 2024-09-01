import { routePath } from '@constants';
import { GuestMyClass } from '@pages/guest/page/index';

import { RouteType } from '@types';

const guestRoutes: RouteType[] = [
  {
    path: routePath.GUEST_MY_CLASS,
    element: <GuestMyClass />,
  },
];

export default guestRoutes;
