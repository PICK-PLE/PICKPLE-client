import { routePath } from '@constants';
import { Categories } from '@pages/categories/page/index';

import { RouteType } from '@types';

const categoriesRoutes: RouteType[] = [
  {
    path: routePath.CATEGORY,
    element: <Categories />,
  },
];

export default categoriesRoutes;
