import { QueryClient, useMutation } from '@tanstack/react-query';

import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

export interface PatchHostSubmitterRequest {
  submitterId: number;
}

const patchHostSubmitter = async ({ submitterId }: PatchHostSubmitterRequest) => {
  try {
    const response = await patch(`/v2/submitter/${submitterId}`, { submitterId });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const usePatchHostSubmitter = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: ({ submitterId }: PatchHostSubmitterRequest) => patchHostSubmitter({ submitterId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.HOST_SUBMIT_REQUEST] });
    },
  });
};
