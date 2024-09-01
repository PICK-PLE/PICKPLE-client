import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimListByHostGetResponse = components['schemas']['MoimListByHostGetResponse'];

const getHostMoimInfo = async (
  hostId: number,
  moimState: string
): Promise<MoimListByHostGetResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<MoimListByHostGetResponse[]>>(
      `/host/${hostId}/moim-list?moimState=${moimState}`
    );

    if (!response) {
      return null;
    }

    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchHostMoimInfo = (hostId: number, moimState: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOST_MOIM_INFO, hostId, moimState],
    queryFn: () => getHostMoimInfo(hostId, moimState),
    enabled: !!hostId && hostId !== 0,
    placeholderData: keepPreviousData,
  });
};
