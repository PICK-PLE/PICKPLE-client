// 공통으로 사용되는 Type 있다면 여기에 정의
export interface ApiResponseType<T> {
  status: number;
  message: string;
  data: T;
}

export interface MutateResponseType {
  status: number;
  message: string;
}

export interface ErrorResponse {
  response: {
    data: {
      status: number;
      message: string;
    };
  };
}
export interface ErrorType {
  status?: number;
  message: string;
}

export type MoimIdPathParameterType = {
  moimId: string;
};

export type NoticeIdPathParameterType = {
  noticeId: string;
};

export interface localStorageUserType {
  guestId: number;
  guestNickname: string;
  hostId: number;
  hostNickname: string;
}
