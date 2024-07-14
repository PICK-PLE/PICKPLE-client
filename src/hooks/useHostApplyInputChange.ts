import { hostApplyAtom } from '@stores';
import { useAtom } from 'jotai';
import React from 'react';
import { HostApplyProps } from 'src/stores/hostApplyData';

export const useHostApplyInputChange = () => {
  const [hostApplyState, setHostApplyState] = useAtom(hostApplyAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof HostApplyProps
  ) => {
    const value = e.target.value;
    setHostApplyState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleCategoryChange = (newCategories: {
    category1: string;
    category2: string;
    category3: string;
  }) => {
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
