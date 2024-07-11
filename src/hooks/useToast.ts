import { useState } from 'react';

const useToast = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isToastRunning, setIsToastRunning] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    if (isToastRunning) return;

    setToastMessage(message);
    setIsToastRunning(true);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
      setIsToastRunning(false);
    }, 2000);
  };

  return { showToast, isToastVisible, toastMessage };
};

export default useToast;
