import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@pages/error/Error.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <ErrorBoundary fallback={<Error />}>
          <App />
        </ErrorBoundary>
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  </React.StrictMode>
);
