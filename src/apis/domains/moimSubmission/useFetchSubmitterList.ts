import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimSubmissionByMoimResponse = components['schemas']['MoimSubmissionByMoimResponse'];

const getSubmitterList = async (moimId: number): Promise<MoimSubmissionByMoimResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimSubmissionByMoimResponse>>(
      `/moim/${moimId}/submitter-list`
    );
    return response.data.data;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchSubmitterList = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.APPLICANT_LIST, moimId],
    queryFn: () => getSubmitterList(moimId),
  });
};
