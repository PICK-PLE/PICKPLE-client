import { get } from '@apis/api';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type PreSignedUrlClientRequest = components['schemas']['PreSignedUrlClientRequest'];

export type PresignedPrefixType =
  | 'MOIM_PREFIX'
  | 'NOTICE_PREFIX'
  | 'REVIEW_PREFIX'
  | 'HOST_PROFILE_PREFIX';

export const getPresignedUrl = async (
  prefix: PresignedPrefixType,
  count: number
): Promise<PreSignedUrlClientRequest[] | null> => {
  try {
    const response = await get<ApiResponseType<PreSignedUrlClientRequest[]>>(`/v2/image/upload`, {
      params: {
        prefix,
        count,
      },
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
