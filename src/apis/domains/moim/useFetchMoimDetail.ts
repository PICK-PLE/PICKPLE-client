import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { AxiosResponse } from 'axios';
import { MoimDetailData } from '@pages/class/components/GuestClassRegisterCard/GuestClassRegisterCard';

const getMoimDetail = async (moimId: number) => {
  const response: AxiosResponse = await get<MoimDetailData>(`/submitted-moim/${moimId}`);

  if (!response) {
    return null;
  }
  return response.data;
};

export const useGetMoimDetail = (moimId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_DETAIL, moimId],
    queryFn: () => getMoimDetail(moimId),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
