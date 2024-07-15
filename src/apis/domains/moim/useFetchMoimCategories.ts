import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType } from '@types';

const getMoimBanner = async (): Promise<string[] | null> => {
  try {
    const response = await get<ApiResponseType<string[]>>('/moim/categories');
    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the category:', error);
    return null;
  }
};

export const useFetchMoimCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_CATEGORIES],
    queryFn: () => getMoimBanner(),
    staleTime: 1000 * 60 * 60 * 24, // 24시간
    gcTime: 1000 * 60 * 60 * 24 * 7, // 1주일
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
