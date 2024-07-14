import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { HostApplyProps } from 'src/stores/hostApplyData';

const postHostApply = async (hostApplyState: HostApplyProps) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await post('submitter', hostApplyState, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const usePostHostApply = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (hostApplyState: HostApplyProps) => postHostApply(hostApplyState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.HOST_APPLY] });
    },
  });
};
