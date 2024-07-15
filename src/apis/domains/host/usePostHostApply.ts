import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { MutateResponseType } from '@types';

type HostApplyRequest = components['schemas']['SubmitterCreateRequest'];

const postHostApply = async (hostApplyState: HostApplyRequest): Promise<MutateResponseType> => {
  // 여긴 사용자와 query/axios 사이의 데이터 타입
  const response = await post<MutateResponseType>('submitter', hostApplyState); //여긴 query/axios와 server 사이의 데이터 타입

  return response.data;
};

export const usePostHostApply = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (hostApplyState: HostApplyRequest) => postHostApply(hostApplyState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.HOST_APPLY] });
    },
  });
};
