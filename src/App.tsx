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
import { useFetchMoimCategories } from '@apis/domains/moim';
import { useAtom } from 'jotai';
import { categoriesAtom } from '@stores';

const router = createBrowserRouter([
  ...authRoutes,
  ...categoriesRoutes,
  ...classRoutes,
  ...guestRoutes,
  ...homeRoutes,
  ...hostRoutes,
  ...myPageRoutes,
  ...devRoutes,
]);

const App = () => {
  const [, setCategories] = useAtom(categoriesAtom);
  const { data, isSuccess } = useFetchMoimCategories();

  if (data && isSuccess) {
    setCategories(data);
  }

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
