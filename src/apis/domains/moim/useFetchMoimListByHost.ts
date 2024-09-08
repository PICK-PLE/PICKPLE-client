import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimListByHostResponse = components['schemas']['MoimListByHostGetResponse'];

const getMoimListByHost = async (hostId: number): Promise<MoimListByHostResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<MoimListByHostResponse[]>>(
      `/v2/host/${hostId}/moim-list`
    );

    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the category:', error);
    return null;
  }
};

export const useFetchMoimListByHost = (hostId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOST_INFO_CLASS, hostId],
    queryFn: () => getMoimListByHost(hostId),
    enabled: !!hostId,
    staleTime: 1000 * 30, // 30초
    gcTime: 1000 * 60 * 5, // 5분
  });
};
