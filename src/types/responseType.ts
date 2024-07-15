export interface MoimResponseType {
  moimId: number;
  moimSubmissionState: MoimSubmissionState;
  title: string;
  dateList: DateList;
  fee: number;
  hostNickname: string;
  imageUrl: string;
}

export interface DateList {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export type MoimSubmissionState =
  | 'pendingPayment' //입금 대기
  | 'pendingApproval' // 승인 완료
  | 'approved' // 승인 완료
  | 'rejected' // 승인 거절
  | 'refunded' // 환불 완료
  | 'completed'; // 참가 완료

export interface HostMyClassDataResponseType {
  moimId: number;
  title: string;
  approvedGuest: number;
  maxGuest: number;
  moimImage: string;
}

export interface Submitter {
  applicantId: number;
  nickname: string;
  profileImage: string;
  applicationDate: string;
}

export interface ApplicantListResponseType {
  maxGuest: number;
  submitterList: Submitter[];
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

export interface DateList {
  date: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface ClassListData {
  moimId: number;
  dayOfDay: number;
  moimTitle: string;
  hostNickName: string;
  moimDate: string;
  dateList: DateList;
  moimImageUrl: string;
  hostImageUrl: string;
}

export interface ApplicantDataType {
  applicantId: number;
  nickname: string;
  profileImage: string;
  applicationDate: string;
}
export interface HostInfoResponseType {
  hostNickName: string;
  hostImageUrl: string;
  hostLink: string;
  hostCategoryList: HostCategoryList;
  hostId: number;
}
export interface HostCategoryList {
  category1: string;
  category2: string | null;
  category3: string | null;
}
