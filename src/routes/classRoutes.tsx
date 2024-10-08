import { routePath } from '@constants';
import {
  Class,
  ClassNotice,
  // ClassApplyComplete,
  // ClassApplyDeposit,
  // ClassApplyQuestion,
  // ClassApplyRule,
  ClassPostPage,
} from '@pages/class/page';
import ClassApply from '@pages/class/page/ClassApply/ClassApply';
import ClassNoticeDetail from '@pages/class/page/ClassNoticeDetail/ClassNoticeDetail';

import { RouteType } from '@types';

const classRoutes: RouteType[] = [
  {
    path: routePath.CLASS_DETAIL,
    element: <Class />,
  },
  {
    path: routePath.CLASS_NOTICE_POST,
    element: <ClassNotice />,
  },
  {
    path: routePath.CLASS_POST,
    element: <ClassPostPage />,
  },
  {
    path: routePath.CLASS_APPLY,
    element: <ClassApply />,
  },
  {
    path: routePath.CLASS_NOTICE_DETAIL,
    element: <ClassNoticeDetail />,
  },
  // {
  //   path: routePath.CLASS_APPLY_RULE,
  //   element: <ClassApplyRule />,
  // },
  // {
  //   path: routePath.CLASS_APPLY_QUESTION,
  //   element: <ClassApplyQuestion />,
  // },
  // {
  //   path: routePath.CLASS_APPLY_DEPOSIT,
  //   element: <ClassApplyDeposit />,
  // },
  // {
  //   path: routePath.CLASS_APPLY_COMPLETE,
  //   element: <ClassApplyComplete />,
  // },
];

export default classRoutes;
