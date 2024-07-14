import { useNavigate } from 'react-router-dom';
import { routePath } from '@constants';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(routePath.HOME);
  };

  const goHostMyPage = () => {
    navigate(routePath.HOST_MYPAGE);
  };

  const goGuestMyPage = () => {
    navigate(routePath.GUEST_MYPAGE);
  };

  return {
    goHome,
    goHostMyPage,
    goGuestMyPage,
  };
};

export default useEasyNavigate;
