import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoImSubmitterListGetResponse = components['schemas']['MoimSubmissionAllResponse'];

const getMoimSubmitterList = async (): Promise<MoImSubmitterListGetResponse[] | null> => {
  try {
    const response =
      await get<ApiResponseType<MoImSubmitterListGetResponse[]>>(`/v2/moim-submission-list`);
    return response.data.data;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchMoimSubmitterList = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_SUBMITTER_ALL],
    queryFn: () => getMoimSubmitterList(),
  });
};
