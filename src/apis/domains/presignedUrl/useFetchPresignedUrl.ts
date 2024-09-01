import { get } from '@apis/api';

import { components } from '@schema';
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

    return response.data.data;
  } catch (err) {
    console.error(err);
  }

  return null;
};
