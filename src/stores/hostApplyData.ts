import { atom } from 'jotai';

import { components } from '@schema';

export const hostApplyAtom = atom<components['schemas']['SubmitterCreateRequest']>({
  intro: '',
  goal: '',
  link: '',
  nickname: '',
  categoryList: {
    category1: '',
    category2: '',
    category3: '',
  },
  plan: '',
  email: '',
});
