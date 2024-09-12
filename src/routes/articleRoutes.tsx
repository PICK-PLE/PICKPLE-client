import { routePath } from '@constants';
import { Picksight } from '@pages/article/page';

import { RouteType } from '@types';

const articleRoutes: RouteType[] = [
  {
    path: routePath.ARTICLE_PICKSIGHT,
    element: <Picksight />,
  },
];

export default articleRoutes;
