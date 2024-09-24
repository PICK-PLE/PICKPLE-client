import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';

import { post } from '@apis/api';

import { useEasyNavigate } from '@hooks';
import { userAtom } from '@stores';

const postLogout = async () => {
  try {
    const response = await post(`/v1/user/logout`);
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
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(RESET);
      goHome();
    },
  });
};
