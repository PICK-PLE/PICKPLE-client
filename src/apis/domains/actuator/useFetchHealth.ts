import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';

const getHealth = async () => {
  const response = await get('/actuator/health');

  if (!response) {
    return null;
  }
  return response.data;
};

export const useFetchHealth = () => {
  return useQuery({
    queryKey: [QUERY_KEY.HEALTH],
    queryFn: () => getHealth(),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
