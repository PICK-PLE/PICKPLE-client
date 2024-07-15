import { components } from '@schema';
// import { UserType } from '@types';
import { atomWithStorage } from 'jotai/utils';

type LoginSuccessResponse = components['schemas']['LoginSuccessResponse'];

export const userAtom = atomWithStorage<LoginSuccessResponse>('user', {
  guestNickname: '',
  guestId: 0,
  hostNickname: '',
  hostId: 0,
});
