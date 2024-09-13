import { useAtom } from 'jotai';
import React from 'react';

import { hostApplyAtom } from '@stores';

import { components } from '@schema';

const useHostApplyInputChange = () => {
  const [hostApplyState, setHostApplyState] = useAtom(hostApplyAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof components['schemas']['SubmitterCreateRequest']
  ) => {
    const value = e.target.value;
    setHostApplyState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const resetHostApplyState = () => {
    setHostApplyState({
      intro: '',
      goal: '',
      link: '',
      nickname: '',
      plan: '',
      email: '',
      userKeyword: '',
    });
  };

  return {
    hostApplyState,
    handleInputChange,
    resetHostApplyState,
  };
};

export default useHostApplyInputChange;
