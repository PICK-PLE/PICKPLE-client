export interface DateList {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface Moim {
  moimId: number;
  moimSubmissionState: MoimSubmissionState;
  moimTitle: string;
  dateList: DateList;
  fee: number;
  hostNickname: string;
}

export enum MoimSubmissionState {
  PENDING_PAYMENT = '입금 대기',
  PENDING_APPROVAL = '승인 대기',
  APPROVED = '승인 완료',
  REJECTED = '승인 거절',
  REFUNDED = '환불 완료',
  COMPLETED = '참가 완료',
}
