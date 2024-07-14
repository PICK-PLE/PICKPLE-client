import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useEasyNavigate } from '@hooks';
import { userAtom } from '@stores';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { UserType } from '@types';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';

const postKakaoLogin = async (authCode: string) => {
  const response: AxiosResponse = await post<UserType>(
    `/user/login?authorizationCode=${authCode}`,
    {
      socialType: 'KAKAO',
    }
  );

  return response;
};

export const usePostKakaoLogin = () => {
  const [user, setUser] = useAtom(userAtom);
  const { goHome } = useEasyNavigate();
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (authCode: string) => postKakaoLogin(authCode),
    onSuccess: (data) => {
      const { data: userData } = data.data;
      const { guestNickname, guestId, hostNickname, hostId, token } = userData;

      setUser({ ...user, guestNickname, guestId, hostNickname, hostId });

      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.KAKAO_LOGIN] });
      localStorage.setItem('accessToken', token.accessToken);
      goHome();
    },
  });
};
