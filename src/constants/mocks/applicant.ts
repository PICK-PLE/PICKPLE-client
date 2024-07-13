// 서버에서 받는 데이터 가짜로 만든거
// isApprovable: true면, 신청자 받는 거 가능하게 > 체크 후 모달
// isApprovable: false면, 신청자 받는 거 불가능하게 > 토스트 메시지
// status 201이면 데이터 잘 들어온 거
// status 201 제외 나머지는 일단 엠티 뷰 뜨게 해 둠 (추후 수정)

export const APPLICANT_DATA = {
  status: 201,
  data: {
    maxGuest: 10,
    isApprovable: true,
    submitterList: [
      {
        applicantId: 1,
        nickname: '박채연',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.08. 19:50',
      },
      {
        applicantId: 2,
        nickname: '유태승',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.07. 17:45',
      },
      {
        applicantId: 3,
        nickname: '장정안',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.06. 13:00',
      },
      {
        applicantId: 4,
        nickname: '임화랑',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.05. 16:30',
      },
      {
        applicantId: 5,
        nickname: '김보람',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.08. 19:50',
      },
      {
        applicantId: 6,
        nickname: '이예린',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.07. 17:45',
      },
      {
        applicantId: 7,
        nickname: '김세은',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.06. 13:00',
      },
      {
        applicantId: 8,
        nickname: '김민서',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.05. 16:30',
      },
      {
        applicantId: 9,
        nickname: '신희선',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.08. 19:50',
      },
      {
        applicantId: 10,
        nickname: '안수빈',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.07. 17:45',
      },
      {
        applicantId: 11,
        nickname: '조소빈',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.06. 13:00',
      },
      {
        applicantId: 12,
        nickname: '이가영',
        profileImage: 'https://placehold.co/600',
        applicationDate: '2024.07.05. 16:30',
      },
    ],
  },
};

export const APPLICANT_ANSWER_1 = {
  questionList: {
    question1: '이 모임에 왜 신청하셨나요?',
    question2: '모임에 임하는 각오 한마디 부탁드립니다.',
    question3: '질문3333333',
  },
  answerList: {
    answer1: '지원하고 싶으니까요.',
    answer2: '열심히 하겠습니다.',
    answer3: '답변3333333',
  },
};

export const APPLICANT_ANSWER_2 = {
  questionList: {
    question1: '이 모임에 왜 신청하셨나요?',
    question2: '모임에 임하는 각오 한마디 부탁드립니다.',
    question3: null,
  },
  answerList: {
    answer1: '지원하고 싶으니까요.',
    answer2: '열심히 하겠습니다.',
    answer3: null,
  },
};
export const APPLICANT_ANSWER_3 = {
  questionList: {
    question1: '이 모임에 왜 신청하셨나요?',
    question2: null,
    question3: null,
  },
  answerList: {
    answer1: '지원하고 싶으니까요.',
    answer2: null,
    answer3: null,
  },
};
