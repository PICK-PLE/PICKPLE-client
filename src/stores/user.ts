import { atom } from 'jotai';
import { UserType } from '@types';

export const userAtom = atom<UserType>({
  nickName: '',
  userId: 0,
  hostId: 0,
  guestImageUrl: '',
});
