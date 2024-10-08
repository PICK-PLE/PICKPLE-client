import { useSuspenseQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type HostIntroGetResponse = components['schemas']['HostIntroGetResponse'];

const getHostInfo = async (hostId: number): Promise<HostIntroGetResponse | null> => {
  try {
    const response = await get<ApiResponseType<HostIntroGetResponse>>(`/v2/host/${hostId}/intro`);
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the host info:', error);
    return null;
  }
};

export const useFetchHostInfo = (hostId: number) => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.HOST_INFO, hostId],
    queryFn: () => getHostInfo(hostId),
    staleTime: 1000 * 10,
    gcTime: 1000 * 10,
  });
};
