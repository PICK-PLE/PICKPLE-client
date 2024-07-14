import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { hostApplyAtom } from '@stores';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';

const postHostApply = async (hostApplyState) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await post('submitter', hostApplyState, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response);
  return response;
};

export const usePostHostApply = () => {
  const [hostApplyState] = useAtom(hostApplyAtom);
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: () => postHostApply(hostApplyState),
    onSuccess: () => {
      //onSuccess 성공한 후에 호스트 신청 퍼널에서 작성했던 state 값들을 다시 초기화 시켜야 할지 모르겠다.
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.HOST_APPLY] });
    },
  });
};
