import { components } from '@schema';
import { atom } from 'jotai';

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
