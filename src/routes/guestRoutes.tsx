import { Class, ClassApply, ClassNotice, ClassPost } from '@pages/class/page/index';
import { RouteType } from '@types';
import { routePath } from '@constants';

const guestRoutes: RouteType[] = [
  {
    path: routePath.CLASS,
    element: <Class />,
  },
  {
    path: routePath.CLASS_APPLY,
    element: <ClassApply />,
  },
  {
    path: routePath.CLASS_NOTICE_POST,
    element: <ClassNotice />,
  },
  {
    path: routePath.CLASS_POST,
    element: <ClassPost />,
  },
];

export default guestRoutes;
