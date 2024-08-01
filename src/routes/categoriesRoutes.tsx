import { routePath } from '@constants';
import { ClassList } from '@pages/categories/page/index';

import { RouteType } from '@types';

const categoriesRoutes: RouteType[] = [
  {
    path: routePath.CATEGORY,
    element: <ClassList />,
  },
];

export default categoriesRoutes;
