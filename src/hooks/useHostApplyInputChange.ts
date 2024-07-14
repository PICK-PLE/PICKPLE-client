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
    const value = key === 'q5' ? e.target.value.split(', ') : e.target.value;
    setHostApplyState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    hostApplyState,
    handleInputChange,
  };
};
