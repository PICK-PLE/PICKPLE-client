import { ErrorBoundary } from '@components';
import Error from '@pages/error/Error';
import { ReactNode } from 'react';

interface customRouteObject {
  element: ReactNode;
}

const wrapRoutesWithErrorBoundary = (routes: customRouteObject[]) => {
  return routes.map((route) => {
    return {
      ...route,
      element: (
        <ErrorBoundary
          fallback={({ error }) => {
            console.error('Caught by ErrorBoundary:', error);
            return <Error />;
          }}>
          {route.element}
        </ErrorBoundary>
      ),
    };
  });
};

export default wrapRoutesWithErrorBoundary;
