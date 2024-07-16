import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useEasyNavigate } from '@hooks';
import { userAtom } from '@stores';
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { components } from '@schema';
import { AxiosResponse } from 'axios';
import { ApiResponseType } from '@types';

type LoginSuccessResponse = components['schemas']['LoginSuccessResponse'];

const postKakaoLogin = async (
  authCode: string
): Promise<AxiosResponse<ApiResponseType<LoginSuccessResponse>>> => {
  const response = await post<ApiResponseType<LoginSuccessResponse>>(
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
        }

        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.KAKAO_LOGIN] });
        goHome();
      }
    },
  });
};
