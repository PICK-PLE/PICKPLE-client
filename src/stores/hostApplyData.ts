import { atom } from 'jotai';

import { components } from '@schema';

export const hostApplyAtom = atom<components['schemas']['SubmitterCreateRequest']>({
  intro: '',
  goal: '',
  link: '',
  nickname: '',
  plan: '',
  email: '',
  userKeyword: '',
});
