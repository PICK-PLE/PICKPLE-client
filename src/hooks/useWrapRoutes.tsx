import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';

import { ErrorBoundary, Spinner } from '@components';
import { Error } from '@pages/error';

interface wrapRoutesWithErrorBoundaryProps {
  element: ReactNode;
}

const wrapRoutes = (routes: wrapRoutesWithErrorBoundaryProps[]) => {
  return routes.map((route) => {
    return {
      ...route,
      element: (
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallback={({ error }) => {
                console.error('Caught by ErrorBoundary:', error);
                return <Error />;
              }}>
              <Suspense fallback={<Spinner />}>{route.element}</Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      ),
    };
  });
};

export default wrapRoutes;
