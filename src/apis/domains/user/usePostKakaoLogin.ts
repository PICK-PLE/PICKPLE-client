import { post } from '@apis/api';
import { useEasyNavigate } from '@hooks';
import { useMutation } from '@tanstack/react-query';

const postKakaoLogin = async (authCode: string) => {
  const response = await post(`/user/login?authorizationCode=${authCode}`, {
    socialType: 'KAKAO',
  });

  return response;
};

export const usePostKakaoLogin = () => {
  const { goHome } = useEasyNavigate();
  // const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (authCode: string) => postKakaoLogin(authCode),
    onSuccess: (data) => {
      const { token } = data.data.data;

      // queryClient.invalidateQueries({ queryKey: [QUERY_KEY.KAKAO_LOGIN] });
      localStorage.setItem('accessToken', token.accessToken);
      goHome();
    },
  });
};
