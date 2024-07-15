import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType, MoimHostResponseType } from '@types';

const getMoimHost = async (hostId: number): Promise<MoimHostResponseType | null> => {
  try {
    const response = await get<ApiResponseType<MoimHostResponseType>>(`/host/${hostId}`);
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the host info:', error);
    return null;
  }
};

export const useFetchMoimHost = (hostId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_HOST],
    queryFn: () => getMoimHost(hostId),
    staleTime: 1000 * 10,
    gcTime: 1000 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!hostId && hostId > 0,
  });
};
