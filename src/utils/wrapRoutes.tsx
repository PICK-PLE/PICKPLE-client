import { ErrorBoundary } from '@components';
import Error from '@pages/error/Error';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode } from 'react';

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
              {route.element}
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      ),
    };
  });
};

export default wrapRoutes;
