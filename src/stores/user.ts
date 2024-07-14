import { atom } from 'jotai';
import { UserType } from '@types';

export const userAtom = atom<UserType>({
  guestNickname: 'asdfasdf',
  guestId: 0,
  hostNickname: '',
  hostId: 0,
});
