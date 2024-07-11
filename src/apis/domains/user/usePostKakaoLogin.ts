import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useEasyNavigate } from '@hooks';
import { QueryClient, useMutation } from '@tanstack/react-query';

const postKakaoLogin = async (authCode: string) => {
  const response = await post(`/user/login?authorizationCode=${authCode}`, {
    socialType: 'KAKAO',
  });

  return response;
};

export const usePostKakaoLogin = () => {
  const { goHome } = useEasyNavigate();
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (authCode: string) => postKakaoLogin(authCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.KAKAO_LOGIN] });
      goHome();
    },
  });
};
