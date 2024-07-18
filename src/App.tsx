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
import { useAtom } from 'jotai';
import { categoriesAtom } from '@stores';
import { useFetchMoimCategories } from '@apis/domains/moim';
import { useEffect } from 'react';

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
  const [, setCategories] = useAtom(categoriesAtom);
  const { data, isSuccess } = useFetchMoimCategories();

  // 렌더링 후에 set을하도록 useEffect를 사용. 이렇게 안하면 콘솔 에러 발생
  useEffect(() => {
    if (data && isSuccess) {
      setCategories(data);
    }
  }, [data, isSuccess, setCategories]);

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
