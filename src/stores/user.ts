import { atomWithStorage } from 'jotai/utils';

import { components } from '@schema';

// import { UserType } from '@types';

type LoginSuccessResponse = components['schemas']['LoginSuccessResponse'];

export const userAtom = atomWithStorage<LoginSuccessResponse>('user', {
  guestNickname: '',
  guestId: 0,
  hostNickname: '',
  hostId: 0,
});
