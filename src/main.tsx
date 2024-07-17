import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@pages/error/Error.tsx';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={() => reset()} FallbackComponent={Error}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  </QueryClientProvider>
);
