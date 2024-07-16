import { post } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorResponse, MutateResponseType } from '@types';

type HostApplyRequest = components['schemas']['SubmitterCreateRequest'];

const postHostApply = async (hostApplyState: HostApplyRequest): Promise<MutateResponseType> => {
  // 여긴 사용자와 query/axios 사이의 데이터 타입
  try {
    const response = await post<MutateResponseType>('submitter', hostApplyState); //여긴 query/axios와 server 사이의 데이터 타입
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostHostApply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (hostApplyState: HostApplyRequest) => postHostApply(hostApplyState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.HOST_APPLY] });
    },
  });
};
