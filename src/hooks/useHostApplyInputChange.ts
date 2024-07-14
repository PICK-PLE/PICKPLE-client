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

  //   const handleCategoryChange = (categories: {
  //     category1: string;
  //     category2: string;
  //     category3: string;
  //   }) => {
  //     setHostApplyState((prevState) => ({
  //       ...prevState,
  //       categoryList: categories,
  //     }));
  //   };
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

  return {
    hostApplyState,
    handleInputChange,
    handleCategoryChange,
  };
};
