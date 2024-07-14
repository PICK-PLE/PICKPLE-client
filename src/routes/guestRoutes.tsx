import { GuestMyClass } from '@pages/guest/page/index';
import { RouteType } from '@types';
import { routePath } from '@constants';

const guestRoutes: RouteType[] = [
  {
    path: routePath.GUEST_MY_CLASS,
    element: <GuestMyClass />,
  },

];

export default guestRoutes;
