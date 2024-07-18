import { useNavigate } from 'react-router-dom';
import { routePath } from '@constants';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(routePath.HOME);
  };

  const goCategories = () => {
    navigate(routePath.CATEGORY);
  };

  const goHostMyPage = () => {
    navigate(routePath.HOST_MYPAGE);
  };

  const goGuestMyPage = () => {
    navigate(routePath.GUEST_MYPAGE);
  };

  return {
    goBack,
    goHome,
    goCategories,
    goHostMyPage,
    goGuestMyPage,
  };
};

export default useEasyNavigate;
