import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';


import { ApiResponseType } from '@types';

const getMoimBanner = async (): Promise<number | null> => {
  try {
    const response = await get<ApiResponseType<number>>('/v1/moim/banner');
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the banner:', error);
    return null;
  }
};

export const useFetchMoimBanner = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.MOIM_BANNER],
    queryFn: () => getMoimBanner(),
    staleTime: 1000 * 10,
    gcTime: 1000 * 30,
    refetchOnWindowFocus: false,
  });
};
