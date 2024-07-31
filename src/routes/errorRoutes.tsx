import Error from '@pages/error/Error';

import { routePath } from '@constants';
import { RouteType } from '@types';

const errorPageRoutes: RouteType[] = [
  {
    path: routePath.ERROR,
    element: <Error />,
  },
];

export default errorPageRoutes;
