import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType } from '@types';
import { components } from '@schema';

type MoimByCategoryResponse = components['schemas']['MoimByCategoryResponse'];

const getMoimListByCategory = async (
  category: string
): Promise<MoimByCategoryResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<MoimByCategoryResponse[]>>(
      `/moim-list?category=${category}`
    );

    return response.data.data;
  } catch (error) {
    console.error('An error occurred while fetching the category:', error);
    return null;
  }
};

export const useFetchMoimListByCategory = (category: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_LIST_BY_CATEGORY],
    queryFn: () => getMoimListByCategory(category),
    enabled: !!category,
    staleTime: 1000 * 30, // 30초
    gcTime: 1000 * 60 * 5, // 5분
  });
};
