import { useMutation } from '@tanstack/react-query';

import { post } from '@apis/api';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';

import { useEasyNavigate } from '@hooks';
import { userAtom } from '@stores';

const postLogout = async () => {
  try {
    const response = await post(`/user/logout`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const usePostLogout = () => {
  const { goHome } = useEasyNavigate();
  const [, setUser] = useAtom(userAtom);
  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      setUser(RESET);
      goHome();
    },
  });
};
