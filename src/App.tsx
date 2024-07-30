import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  authRoutes,
  categoriesRoutes,
  classRoutes,
  guestRoutes,
  homeRoutes,
  hostRoutes,
  myPageRoutes,
  //devRoutes,
  adminRoutes,
} from '@routes';
import errorPageRoutes from './routes/errorRoutes';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import { wrapRoutes } from '@utils';

const allRoutes = [
  ...categoriesRoutes,
  ...classRoutes,
  ...guestRoutes,
  ...homeRoutes,
  ...hostRoutes,
  ...myPageRoutes,
  ...errorPageRoutes,
  ...adminRoutes,
  // ...devRoutes,
];

const protectedRoutes = allRoutes.map((route) => ({
  ...route,
  element: <PrivateRoute element={route.element} />,
}));

const wrapRouter = wrapRoutes([...authRoutes, ...protectedRoutes]);

const router = createBrowserRouter(wrapRouter);

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
