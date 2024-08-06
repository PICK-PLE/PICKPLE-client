import { routePath } from '@constants';
import { ClassList } from '@pages/classList/page/index';

import { RouteType } from '@types';

const classListRoutes: RouteType[] = [
  {
    path: routePath.CLASS_LIST,
    element: <ClassList />,
  },
];

export default classListRoutes;
