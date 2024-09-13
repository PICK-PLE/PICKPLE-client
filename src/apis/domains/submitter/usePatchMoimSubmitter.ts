import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patch } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

export interface PatchMoimSubmitterRequest {
  moimSubmissionId: number;
}

const patchMoimSubmitter = async ({ moimSubmissionId }: PatchMoimSubmitterRequest) => {
  try {
    const response = await patch(`/v2/moimSubmission/${moimSubmissionId}`, { moimSubmissionId });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const usePatchMoimSubmitter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ moimSubmissionId }: PatchMoimSubmitterRequest) =>
      patchMoimSubmitter({ moimSubmissionId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_SUBMITTER_ALL_REQUEST] });
    },
  });
};
