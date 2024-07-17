import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  authRoutes,
  categoriesRoutes,
  classRoutes,
  guestRoutes,
  homeRoutes,
  hostRoutes,
  myPageRoutes,
  devRoutes,
} from '@routes';
import errorPageRoutes from './routes/errorRoutes';

const router = createBrowserRouter([
  ...authRoutes,
  ...categoriesRoutes,
  ...classRoutes,
  ...guestRoutes,
  ...homeRoutes,
  ...hostRoutes,
  ...myPageRoutes,
  ...devRoutes,
  ...errorPageRoutes,
]);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </>
  );
};

export default App;
