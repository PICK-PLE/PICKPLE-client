import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type HostByMoimResponse = components['schemas']['HostByMoimResponse'];

const getMoimHost = async (hostId: number): Promise<HostByMoimResponse | null> => {
  try {
    const response = await get<ApiResponseType<HostByMoimResponse>>(`/host/${hostId}`);
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the host info:', error);
    return null;
  }
};

export const useFetchMoimHost = (hostId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_HOST, hostId],
    queryFn: () => getMoimHost(hostId),
    staleTime: 1000 * 10,
    gcTime: 1000 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!hostId && hostId > 0,
  });
};