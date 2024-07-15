
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { components } from '@schema';
import { ApiResponseType } from '@types';

type MoimDetailResponse = components['schemas']['MoimDetailResponse'];

const getMoimDetail = async (classId: string): Promise<MoimDetailResponse | null> => {
  try {
    const response = await get<ApiResponseType<MoimDetailResponse>>(`/moim/${Number(classId)}`);
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the class detail:', error);
    return null;
  }
};

export const useFetchMoimDetail = (classId: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_DETAIL],
    queryFn: () => getMoimDetail(classId),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
