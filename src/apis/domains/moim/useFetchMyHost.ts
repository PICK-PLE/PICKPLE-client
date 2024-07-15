import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType, HostInfoCardWithLinkDataResponseType } from '@types';

const getMyHostInfo = async (): Promise<HostInfoCardWithLinkDataResponseType | null> => {
  try {
    const response = await get<ApiResponseType<HostInfoCardWithLinkDataResponseType>>(`/host`);

    if (!response) {
      return null;
    }
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
