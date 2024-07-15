import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';

type PreSignedUrlResponse = components['schemas']['PreSignedUrlResponse'];
const getPresignedUrl = async (count: number): Promise<PreSignedUrlResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<PreSignedUrlResponse[]>>(
      `/notice-image-list/upload/${count}`
    );

    if (!response) {
      return null;
    }
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }

  return null;
};

export const useFetchPresignedUrl = (count: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.PRE_SIGNED_URL],
    queryFn: () => getPresignedUrl(count),
  });
};
