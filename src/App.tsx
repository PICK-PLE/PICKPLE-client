import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './styles/theme';
import GlobalStyle from './styles/global';
import { devRoutes } from '@routes';

const router = createBrowserRouter([...devRoutes]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
