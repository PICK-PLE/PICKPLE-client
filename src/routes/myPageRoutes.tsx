import { GuestMyPage, HostMyPage } from '@pages/myPage/page/index';
import { RouteType } from '../types/routeType';
import { routePath } from '@constants';

const myPageRoutes: RouteType[] = [
  {
    path: routePath.GUEST_MYPAGE,
    element: <GuestMyPage />,
  },
  {
    path: routePath.HOST_MYPAGE,
    element: <HostMyPage />,
  },
];

export default myPageRoutes;
