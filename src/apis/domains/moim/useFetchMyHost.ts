import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { HostInfoCardWithLinkDataResponseType } from '@types';
import { AxiosResponse } from 'axios';

const getMyHostInfo = async () => {
  const response: AxiosResponse = await get<HostInfoCardWithLinkDataResponseType>(`/host`);

  if (!response) {
    return null;
  }

  return response.data.data;
};

export const useFetchMyHost = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MY_HOST_INFO],
    queryFn: () => getMyHostInfo(),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};
