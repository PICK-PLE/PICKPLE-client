// 호스트 목데이터
export const hostData = {
  nickName: '채연',
  profileUrl: null,
  count: 2,
  keyword: '10년차 요리 전문가',
  description: '안녕하세요, 스픽커 그것은입니다.',
  socialLink: 'example.com',
};

// 클래스 목데이터
export const hostClassData = [
  {
    moimId: 1,
    dayOfDay: 1,
    title: '부산 10년 토박이 달아오르구마',
    hostNickName: '달아오르구마',
    dateList: {
      date: '2024.07.06',
      dayOfWeek: '토',
      startTime: '15:00',
      endTime: '18:00',
    },
    moimImageUrl: 'example.com',
    hostImageUrl: 'example.com',
  },
  {
    moimId: 2,
    dayOfDay: 1,
    title: '서산 10년 토박이 부농고마',
    hostNickName: '부농고마',
    dateList: {
      date: '2024.07.06',
      dayOfWeek: '토',
      startTime: '15:00',
      endTime: '18:00',
    },
    moimImageUrl: 'example.com',
    hostImageUrl: 'example.com',
  },
];

// 리뷰 예시
export const hostReviewData = ['좋아요', '재밌어욧', '최고'];

export interface HostInfoData {
  nickName: string;
  profileUrl: string;
  count: number;
  keyword: string;
  description: string;
  socialLink: string;
}

// interface HostClassDate {
//   date: string; // 날짜
//   dayOfWeek: string; // 요일
//   startTime: string; // 시작 시간
//   endTime: string; // 종료 시간
// }

// export interface HostClassData {
//   moimId: number; // 모임 ID
//   dayOfDay: number; // 요일 번호 (1 = 월요일, 2 = 화요일, 등)
//   title: string; // 클래스 제목
//   hostNickName: string; // 호스트 닉네임
//   dateList: HostClassDate; // 클래스 날짜 정보
//   moimImageUrl: string; // 모임 이미지 URL
//   hostImageUrl: string; // 호스트 이미지 URL
// }
