import { components } from '@schema';
import { hostApplyAtom } from '@stores';
import { useAtom } from 'jotai';
import React from 'react';

export const useHostApplyInputChange = () => {
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
  const handleCategoryChange = (newCategories: components['schemas']['SubmitterCategoryInfo']) => {
    setHostApplyState((prevState) => ({
      ...prevState,
      categoryList: newCategories,
    }));
  };

  const resetHostApplyState = () => {
    setHostApplyState({
      intro: '',
      goal: '',
      link: '',
      nickname: '',
      categoryList: {
        category1: '',
        category2: '',
        category3: '',
      },
      plan: '',
      email: '',
    });
  };

  return {
    hostApplyState,
    handleInputChange,
    handleCategoryChange,
    resetHostApplyState,
  };
};
