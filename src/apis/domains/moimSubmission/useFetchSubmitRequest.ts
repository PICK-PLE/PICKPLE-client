import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type SubmittionDetailResponse = components['schemas']['SubmittionDetailResponse'];

const getSubmitRequest = async ({
  moimId,
  submitterId,
}: {
  moimId: number;
  submitterId: number;
}): Promise<SubmittionDetailResponse | null> => {
  try {
    const response = await get<ApiResponseType<SubmittionDetailResponse>>(
      `/moim/${moimId}/submitter/${submitterId}`
    );
    return response.data.data;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchSubmitRequest = ({
  moimId,
  submitterId,
}: {
  moimId: number;
  submitterId: number;
}) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_SUBMIT_REQUEST, moimId, submitterId],
    queryFn: () => getSubmitRequest({ moimId, submitterId }),
  });
};
