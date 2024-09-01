import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

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
