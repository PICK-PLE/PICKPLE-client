import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType, ErrorType } from '@types';

type HostGetResponse = components['schemas']['HostGetResponse'];

const getMyHostInfo = async (): Promise<HostGetResponse | ErrorType | null> => {
  try {
    const response = await get<ApiResponseType<HostGetResponse>>(`/v2/host`);
    return response.data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err);
      console.log(err.response?.data);
      return err.response?.data;
    } else {
      console.error(err);
      return null;
    }
  }
};

export const useFetchMyHost = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.MY_HOST_INFO],
    queryFn: () => getMyHostInfo(),
    refetchOnWindowFocus: false,
  });
};
