import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType, ErrorResponse, ErrorType, MutateResponseType } from '@types';

type HostUpdateRequest = components['schemas']['HostUpdateRequest'];
export interface PatchHostInfoRequest {
  hostId: number;
  hostInfoValue: HostUpdateRequest;
}

const patchHostInfo = async ({
  hostId,
  hostInfoValue,
}: PatchHostInfoRequest): Promise<MutateResponseType> => {
  try {
    const response = await patch<ApiResponseType<MutateResponseType>>(
      `/v2/host/${hostId}`,
      hostInfoValue
    );
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePatchHostInfo = (hostId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ hostId, hostInfoValue }: PatchHostInfoRequest) =>
      patchHostInfo({ hostId, hostInfoValue }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.HOST_INFO, hostId],
      });
      navigate(`/host/info/${hostId}`);
    },

    onError: (error: ErrorType) => {
      if (error.status === 40008) {
        alert('중복된 닉네임 입니다.');
      }
    },
  });
};
