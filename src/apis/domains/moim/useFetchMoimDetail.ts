import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimDetailResponse = components['schemas']['MoimDetailResponse'];

const getMoimDetail = async (moimId: string): Promise<MoimDetailResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimDetailResponse>>(`/v2/moim/${Number(moimId)}`);
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the class detail:', error);
    return null;
  }
};

export const useFetchMoimDetail = (moimId: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_DETAIL, moimId],
    queryFn: () => getMoimDetail(moimId),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
