import { Categories } from '@pages/categories/page/index';

import { routePath } from '@constants';
import { RouteType } from '@types';

const categoriesRoutes: RouteType[] = [
  {
    path: routePath.CATEGORY,
    element: <Categories />,
  },
];

export default categoriesRoutes;
