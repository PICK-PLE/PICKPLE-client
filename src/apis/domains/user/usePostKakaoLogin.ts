import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useAtom } from 'jotai';

import { instance, post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { useEasyNavigate } from '@hooks';
import { userAtom } from '@stores';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type LoginSuccessResponse = components['schemas']['LoginSuccessResponse'];

const postKakaoLogin = async (
  authCode: string
): Promise<AxiosResponse<ApiResponseType<LoginSuccessResponse>>> => {
  const response = await post<ApiResponseType<LoginSuccessResponse>>(
    `/user/login?authorizationCode=${authCode}`,
    {
      socialType: 'KAKAO',
      redirectUri: 'http://localhost:5173/kakao/redirection',
    }
  );

  return response;
};

export const usePostKakaoLogin = () => {
  const [user, setUser] = useAtom(userAtom);
  const { goHome } = useEasyNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (authCode: string) => postKakaoLogin(authCode),
    onSuccess: (response) => {
      const resData: LoginSuccessResponse = response.data.data;
      if (resData) {
        const { guestNickname, guestId, hostNickname, hostId, token } = resData;

        setUser({ ...user, guestNickname, guestId, hostNickname, hostId });

        if (token && token.accessToken) {
          localStorage.setItem('accessToken', token.accessToken);
          instance.defaults.headers.Authorization = `Bearer ${token.accessToken}`;
        }

        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.KAKAO_LOGIN] });
        goHome();
      }
    },
  });
};
