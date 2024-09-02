import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type SubmitterListGetResponse = components['schemas']['SubmitterListGetResponse'];

const getHostSubmitterList = async (): Promise<SubmitterListGetResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<SubmitterListGetResponse[]>>(`/v1/submitter-list`);
    return response.data.data;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchHostSubmitterList = () => {
  return useQuery({
    queryKey: [QUERY_KEY.HOST_SUBMITTER],
    queryFn: () => getHostSubmitterList(),
  });
};
