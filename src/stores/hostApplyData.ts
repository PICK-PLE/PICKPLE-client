import { atom } from 'jotai';

export interface HostApplyProps {
  intro: string;
  goal: string;
  link: string;
  nickname: string;
  categoryList: {
    category1: string;
    category2: string;
    category3: string;
  };
  plan: string;
  email: string;
}

export const hostApplyAtom = atom<HostApplyProps>({
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
