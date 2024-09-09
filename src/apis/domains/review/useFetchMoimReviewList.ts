import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type ReviewListGetByMoimResponse = components['schemas']['ReviewListGetByMoimResponse'];

const getMoimReviewList = async (moimId: string): Promise<ReviewListGetByMoimResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<ReviewListGetByMoimResponse[]>>(
      `/v2/moim/${moimId}/review-list`
    );
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const useFetchMoimReviewList = (moimId: string, selectTab: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_REVIEW_LIST, moimId],
    queryFn: () => getMoimReviewList(moimId),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
    enabled: selectTab === '리뷰',
  });
};
