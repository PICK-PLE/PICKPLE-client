import { routePath } from '@constants';
import GuestMyClassReviewComplete from '@pages/guest/page/GuestMyClassReviewComplete/GuestMyClassReviewComplete';
import GuestMyClassReviewWrite from '@pages/guest/page/GuestMyClassReviewWrite/GuestMyClassReviewWrite';
import { GuestMyClass } from '@pages/guest/page/index';

import { RouteType } from '@types';

const guestRoutes: RouteType[] = [
  {
    path: routePath.GUEST_MY_CLASS,
    element: <GuestMyClass />,
  },
  {
    path: routePath.GUEST_MY_CLASS_REVIEW_WRITE,
    element: <GuestMyClassReviewWrite />,
  },
  {
    path: routePath.GUEST_MY_CLASS_REVIEW_COMPLETE,
    element: <GuestMyClassReviewComplete />,
  },
];

export default guestRoutes;
