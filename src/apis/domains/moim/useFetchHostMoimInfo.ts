import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { HostMyClassDataResponseType } from '@types';

interface GetHostMoimInfoResponse {
  data: HostMyClassDataResponseType[];
}

const getHostMoimInfo = async (hostId: number, moimState: string) => {
  const response = await get<GetHostMoimInfoResponse>(
    `/host/${hostId}/moim-list?moimState=${moimState}`
  );
  if (!response) {
    return null;
  }
  return response.data;
};

export const useFetchHostMoimInfo = (hostId: number, moimState: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOST_MOIM_INFO],
    queryFn: () => getHostMoimInfo(hostId, moimState),
  });
};
