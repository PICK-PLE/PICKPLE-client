import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';

const getHostMoimInfo = async (moimState: string) => {
  const response = await get(`/host/{hostId}/moim-list?moimState=${moimState}`);
  if (!response) {
    return null;
  }
  return response.data;
};

export const useFetchHostMoimInfo = (moimState: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOST_MOIM_INFO],
    queryFn: () => getHostMoimInfo(moimState),
  });
};
