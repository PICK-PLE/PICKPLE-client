// 공통으로 사용되는 Type 있다면 여기에 정의
export interface ApiResponseType<T> {
  status: number;
  message: string;
  data: T;
}
export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface UserType {
  guestNickname: string;
  guestId: number;
  hostNickname: string;
  hostId: number;
}
