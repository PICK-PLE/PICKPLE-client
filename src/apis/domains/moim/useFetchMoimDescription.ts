import { useQuery } from '@tanstack/react-query';

import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { ApiResponseType } from '@types';




const getMoimDescription = async (moimId: string): Promise<string | null> => {
  try {
    const response = await get<ApiResponseType<{ description: string }>>(
      `/moim/${Number(moimId)}/description`
    );
    return response.data.data.description;
  } catch (error) {
    console.error('An error occurred while fetching the class description:', error);
    return null;
  }
};

export const useFetchMoimDescription = (moimId: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_DESCRIPTION, moimId],
    queryFn: () => getMoimDescription(moimId),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
