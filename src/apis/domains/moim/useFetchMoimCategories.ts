import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';

const getMoimBanner = async () => {
  const response = await get('/moim/categories');

  if (!response) {
    return null;
  }
  return response.data;
};

export const useFetchMoimCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_CATEGORIES],
    queryFn: () => getMoimBanner(),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
