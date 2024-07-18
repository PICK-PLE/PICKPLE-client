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
  //devRoutes,
  adminRoutes

} from '@routes';
import errorPageRoutes from './routes/errorRoutes';
import { useAtom } from 'jotai';
import { categoriesAtom } from '@stores';
import { useFetchMoimCategories } from '@apis/domains/moim';
import { useEffect } from 'react';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

const allRoutes = [
  ...categoriesRoutes,
  ...classRoutes,
  ...guestRoutes,
  ...homeRoutes,
  ...hostRoutes,
  ...myPageRoutes,
  ...errorPageRoutes,
  ...adminRoutes
  // ...devRoutes,
];

const protectedRoutes = allRoutes.map((route) => ({
  ...route,
  element: <PrivateRoute element={route.element} />,
}));

const router = createBrowserRouter([...authRoutes, ...protectedRoutes]);

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
