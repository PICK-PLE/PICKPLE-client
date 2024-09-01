import { atom } from 'jotai';

import { ClassPostDataType } from './types/classPostDataType';

export const classPostAtom = atom<ClassPostDataType>({
  categoryList: {
    category1: '',
    category2: '',
    category3: '',
  },
  isOffline: true,
  offlineSpot: '',
  onlineSpot: '',

  date: '',
  dayOfWeek: '',
  startTime: '',
  endTime: '',

  maxGuest: 7,
  fee: 0,
  accountList: {
    holder: '',
    bank: '',
    accountNumber: '',
  },
  questionList: {
    question1: '',
    question2: '',
    question3: '',
  },
  title: '',
  description: '',
  imageList: [],
});

export const moimIdAtom = atom(0);
