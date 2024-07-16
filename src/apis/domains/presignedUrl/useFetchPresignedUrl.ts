import { get } from '@apis/api';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';
import { components } from '@schema';
import { useQuery } from '@tanstack/react-query';
import { ApiResponseType } from '@types';

type PreSignedUrlResponse = components['schemas']['PreSignedUrlResponse'];

export type PresignedUrlType = 'notice' | 'moim';

export const getPresignedUrl = async (
  count: number,
  type: PresignedUrlType
): Promise<PreSignedUrlResponse[] | null> => {
  try {
    const response = await get<ApiResponseType<PreSignedUrlResponse[]>>(
      `/${type}-image-list/upload/${count}`
    );

    if (!response) {
      return null;
    }
    /**@정안todo 데이터 확인용 콘솔이라 나중에 지울거임 시비 ㄴㄴ */
    console.log('response.data.data', response.data.data);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }

  return null;
};

export const useFetchPresignedUrl = (count: number, type: PresignedUrlType) => {
  return useQuery({
    queryKey: [QUERY_KEY.PRE_SIGNED_URL],
    queryFn: () => getPresignedUrl(count, type),
  });
};
