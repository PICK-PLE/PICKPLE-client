import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type ReviewByHostResponse = components['schemas']['ReviewListGetByHostResponse'];

const getReviewByHost = async (hostId: number): Promise<ReviewByHostResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<ReviewByHostResponse[]>>(
      `/v2/host/${hostId}/review-list`
    );

    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the category:', error);
    return null;
  }
};

export const useFetchReviewByHost = (hostId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOST_INFO_REVIEW, hostId],
    queryFn: () => getReviewByHost(hostId),
    enabled: !!hostId,
    staleTime: 1000 * 30, // 30초
    gcTime: 1000 * 60 * 5, // 5분
  });
};
