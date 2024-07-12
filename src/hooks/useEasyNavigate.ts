import { useNavigate } from 'react-router-dom';
import { routePath } from '@constants';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(routePath.HOME);
  };

  const goClassApplyQuestion = () => {
    navigate(routePath.CLASS_APPLY_QUESTION);
  };

  const goClassApplyDeposit = () => {
    navigate(routePath.CLASS_APPLY_DEPOSIT)
  }

  const goClassApplyComplete = () => {
    navigate(routePath.CLASS_APPLY_COMPLETE);
  };

  return {
    goHome,
    goClassApplyQuestion,
    goClassApplyDeposit,
    goClassApplyComplete
  };
};

export default useEasyNavigate;
