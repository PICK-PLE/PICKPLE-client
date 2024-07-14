import { atom } from 'jotai';

export interface HostApplyProps {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string[];
  q6: string;
  q7: string;
}

export const hostApplyAtom = atom<HostApplyProps>({
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: [],
  q6: '',
  q7: '',
});
