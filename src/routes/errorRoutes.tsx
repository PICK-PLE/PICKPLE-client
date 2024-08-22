import { routePath } from '@constants';
import { Error } from '@pages/error';
import { RouteType } from '@types';

const errorPageRoutes: RouteType[] = [
  {
    path: routePath.ERROR,
    element: <Error />,
  },
];

export default errorPageRoutes;
