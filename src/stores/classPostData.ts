import { components } from '@schema';
import { atom } from 'jotai';

export const classPostAtom = atom<components['schemas']['MoimCreateRequest']>({
  categoryList: {
    category1: '',
    category2: '',
    category3: '',
  },
  isOffline: true,
  spot: '',
  dateList: {
    date: '',
    startTime: '',
    endTime: '',
  },
  maxGuest: 0,
  fee: 0,
  accountList: {
    holder: '',
    bank: '',
    accountNumber: '',
  },
  title: '',
  description: '',
  imageList: {
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
  },
});
