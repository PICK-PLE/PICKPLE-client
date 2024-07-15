import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { HostMyClassDataResponseType } from '@types';

interface GetHostMoimInfoResponse {
  data: HostMyClassDataResponseType[];
}

const getHostMoimInfo = async (
  hostId: number,
  moimState: string
): Promise<GetHostMoimInfoResponse | null> => {
  try {
    const response = await get<GetHostMoimInfoResponse>(
      `/host/${hostId}/moim-list?moimState=${moimState}`
    );

    if (!response) {
      return null;
    }
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchHostMoimInfo = (hostId: number, moimState: string) => {
  return useQuery({
    //쿼리 키가 여러개로 구성되어 있을 때, 하나만 달라져도 새롭게 캐싱해옴.
    queryKey: [QUERY_KEY.HOST_MOIM_INFO, hostId, moimState],
    queryFn: () => getHostMoimInfo(hostId, moimState),
  });
};
