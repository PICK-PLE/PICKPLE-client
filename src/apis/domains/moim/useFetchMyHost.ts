import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { ApiResponseType } from '@types';

import { components } from '@schema';

type HostGetResponse = components['schemas']['HostGetResponse'];

const getMyHostInfo = async (): Promise<HostGetResponse | null> => {
  try {
    const response = await get<ApiResponseType<HostGetResponse>>(`/host`);
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchMyHost = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MY_HOST_INFO],
    queryFn: () => getMyHostInfo(),
    refetchOnWindowFocus: false,
  });
};
