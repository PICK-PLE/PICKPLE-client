import { UserType } from '@types';
import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage<UserType>('user', {
  guestNickname: '',
  guestId: 0,
  hostNickname: '',
  hostId: 0,
});
