export interface ClassPostDataType {
  categoryList: {
    category1: string;
    category2?: string;
    category3?: string;
  };
  isOffline: boolean;
  offlineSpot: string;
  onlineSpot: string;

  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;

  maxGuest: number;
  fee: number;
  accountList: {
    holder: string;
    bank: string;
    accountNumber: string;
  };
  questionList: {
    question1: string;
    question2?: string;
    question3?: string;
  };
  title: string;
  description: string;
  imageList: string[];
}
