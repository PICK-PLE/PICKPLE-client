import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { get } from '@apis/api';
import { ApiResponseType } from '@types';

const getMoimDescription = async (classId: string): Promise<string | null> => {
  try {
    const response = await get<ApiResponseType<{ description: string }>>(
      `/moim/${Number(classId)}/description`
    );
    return response.data.data.description;
  } catch (error) {
    console.error('An error occurred while fetching the class description:', error);
    return null;
  }
};

export const useFetchMoimDescription = (classId: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.MOIM_DESCRIPTION, classId],
    queryFn: () => getMoimDescription(classId),
    // staleTime: 3000,
    // gcTime: 50000,
  });
};
