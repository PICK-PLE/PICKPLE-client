import { useSuspenseQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimInfoResponse = components['schemas']['MoimGetResponse'];

const getMoimInfo = async (moimId: string): Promise<MoimInfoResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimInfoResponse>>(
      `/v2/moim/${Number(moimId)}/review`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useFetchMoimFromReviewPage = (moimId: string) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.REVIEW_MOIM_INFO, moimId],
    queryFn: () => getMoimInfo(moimId),
  });
};
