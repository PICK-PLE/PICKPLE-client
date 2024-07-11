export interface MoimResponseType {
  moimId: number;
  moimSubmissionState: MoimSubmissionState;
  moimTitle: string;
  dateList: DateList;
  fee: number;
  hostNickname: string;
}

export interface DateList {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export type MoimSubmissionState =
  | 'PENDING_PAYMENT' //입금 대기
  | 'PENDING_APPROVAL' // 승인 완료
  | 'APPROVED' // 승인 완료
  | 'REJECTED' // 승인 거절
  | 'REFUNDED' // 환불 완료
  | 'COMPLETED'; // 참가 완료

export interface HostMyClassDataResponseType {
  moimId: number;
  title: string;
  approvedGuest: number;
  maxGuest: number;
  moimImage: string;
}

export interface NoticeResponseType {
  noticeId: number;
  hostNickName: string;
  hostImageUrl: string;
  title: string;
  content: string;
  date: string;
  noticeImageUrl: string | null;
}
