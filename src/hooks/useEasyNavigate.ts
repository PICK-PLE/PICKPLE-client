import { useNavigate } from 'react-router-dom';
import { routePath } from '@constants';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(routePath.HOME);
  };

  const goMyPage = () => {
    navigate(routePath.GUEST_MYPAGE);
  };

  return {
    goHome,
    goMyPage,
  };
};

export default useEasyNavigate;
