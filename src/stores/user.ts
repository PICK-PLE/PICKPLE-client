import { atom } from 'jotai';
import { UserType } from '@types';

export const userAtom = atom<UserType>({
  guestNickname: '',
  guestId: 0,
  hostNickname: '',
  hostId: 0,
  token: { accessToken: '', refreshToken: '' },
});
