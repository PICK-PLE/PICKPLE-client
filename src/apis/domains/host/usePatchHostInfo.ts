import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';

export type HostUpdateRequest = components['schemas']['HostUpdateRequest'];

export interface PatchHostInfoRequest {
  hostId: number;
  hostInfoValue: HostUpdateRequest;
}

const patchHostInfo = async ({ hostId, hostInfoValue }: PatchHostInfoRequest) => {
  try {
    const response = await patch(`/v2/host/${hostId}`, hostInfoValue);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
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
        queryKey: [QUERY_KEY.HOST_INFO_EDIT, hostId],
      });

      navigate(`/host/info/${hostId}`);
    },
  });
};
