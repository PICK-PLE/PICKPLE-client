import { useNavigate } from 'react-router-dom';
import { routePath } from '@constants';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(routePath.HOME);
  };

  return {
    goHome,
  };
};

export default useEasyNavigate;
