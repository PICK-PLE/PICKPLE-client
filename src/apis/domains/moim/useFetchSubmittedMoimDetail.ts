import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimByGuestResponse = components['schemas']['MoimByGuestResponse'];

const SubmittedMoimDetail = async (moimId: number): Promise<MoimByGuestResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimByGuestResponse>>(`/v1/submitted-moim/${moimId}`);
    return response.data.data;
  } catch (error) {
    console.error('error:', error);
    return null;
  }
};

export const useFetchSubmittedMoimDetail = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_DETAIL, moimId],
    queryFn: () => SubmittedMoimDetail(moimId),
    // enabled: moimId > 0
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
