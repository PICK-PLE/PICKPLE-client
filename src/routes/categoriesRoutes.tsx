import { Categories } from '@pages/categories/page/index';
import { RouteType } from '../types/routeType';
import { routePath } from '@constants';

const categoriesRoutes: RouteType[] = [
  {
    path: routePath.CATEGORY,
    element: <Categories />,
  },
];

export default categoriesRoutes;
