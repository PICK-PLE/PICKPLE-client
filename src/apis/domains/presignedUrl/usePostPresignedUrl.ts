import { post } from '@apis/api';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type PreSignedUrlResponse = components['schemas']['PreSignedUrlResponse'];

export type PresignedPrefixType =
  | 'MOIM_PREFIX'
  | 'NOTICE_PREFIX'
  | 'REVIEW_PREFIX'
  | 'HOST_PROFILE_PREFIX';

export const postPresignedUrl = async (
  prefix: PresignedPrefixType,
  count: number
): Promise<PreSignedUrlResponse[] | null> => {
  try {
    const response = await post<ApiResponseType<PreSignedUrlResponse[]>>(`/v2/image/upload`, {
      prefix,
      count,
    });

    if (!response) {
      return null;
    }

    return response.data.data;
  } catch (err) {
    console.error(err);
  }

  return null;
};
