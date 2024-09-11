import {
  tableContainerStyle,
  tableLayoutStyle,
  tableStyle,
  tdStyle,
  thStyle,
  titleStyle,
} from '@pages/admin/components/MoimSubmitter/MoimSubmitter.style';

const moimSubmitterData = [
  {
    moimSubmissionId: 1,
    date: '2024.08.15 04:25:55',
    moimSubmissionState: 'pendingApproval',
    guestId: 1,
    guestNickname: '달아오르구마',
    kakaoNickname: '화랑',
    moimId: 1,
    moimTitle: '티엘고마가 알려주는 클래스 성공방법',
    hostNickname: '소빈',
    questionList: {
      question1: '질문1',
      question2: '질문2',
      question3: null,
    },
    answerList: {
      answer1: '답변 1',
      answer2: '답변 2',
      answer3: null,
    },
  },
  {
    moimSubmissionId: 1,
    date: '2024.08.15 04:25:55',
    moimSubmissionState: 'pendingPayment',
    guestId: 1,
    guestNickname: '달아오르구마',
    kakaoNickname: '화랑',
    moimId: 1,
    moimTitle: '티엘고마가 알려주는 클래스 성공방법',
    hostNickname: '소빈',
    questionList: {
      question1: '질문1',
      question2: '질문2',
      question3: null,
    },
    answerList: {
      answer1: '답변 1',
      answer2: '답변 2',
      answer3: null,
    },
  },
];

const MOIM_SUBMITTER_STATUS = {
  pendingPayment: '입금 대기',
  pendingApproval: '승인 대기',
};

const MoimSubmitter = () => {
  const handleButtonClick = (submitterId: number) => {
    mutate(
      { submitterId },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };
  return (
    <div css={tableLayoutStyle}>
      <h1 css={titleStyle}>PickPle 참가자 입금 확인</h1>
      <div css={tableContainerStyle}>
        <table css={tableStyle}>
          <thead>
            <tr>
              <th css={thStyle}>신청 순서</th>
              <th css={thStyle}>신청 일시</th>
              <th css={thStyle}>참가자 ID</th>
              <th css={thStyle}>닉네임</th>
              <th css={thStyle}>카카오 닉네임</th>
              <th css={thStyle}>클래스 ID</th>
              <th css={thStyle}>클래스명</th>
              <th css={thStyle}>스픽커명</th>
              <th css={thStyle}>[1] 질문</th>
              <th css={thStyle}>[1] 답변 </th>
              <th css={thStyle}>[2] 질문</th>
              <th css={thStyle}>[2] 답변 </th>
              <th css={thStyle}>[3] 질문</th>
              <th css={thStyle}>[3] 답변</th>
              <th css={thStyle}>상태</th>
              <th css={thStyle}>승인여부</th>
            </tr>
          </thead>
          <tbody>
            {moimSubmitterData.map((item, index) => (
              <tr key={index}>
                <td css={tdStyle}>{item.moimSubmissionId}</td>
                <td css={tdStyle}>{item.date}</td>
                <td css={tdStyle}>{item.guestId}</td>
                <td css={tdStyle}>{item.guestNickname}</td>
                <td css={tdStyle}>{item.kakaoNickname}</td>
                <td css={tdStyle}>{item.moimId}</td>
                <td css={tdStyle}>{item.moimTitle}</td>
                <td css={tdStyle}>{item.hostNickname}</td>
                <td css={tdStyle}>{item.questionList.question1}</td>
                <td css={tdStyle}>{item.answerList.answer1}</td>
                <td css={tdStyle}>{item.questionList.question2}</td>
                <td css={tdStyle}>{item.answerList.answer2}</td>
                <td css={tdStyle}>{item.questionList.question3}</td>
                <td css={tdStyle}>{item.answerList.answer3}</td>
                <td css={tdStyle}>
                  {
                    MOIM_SUBMITTER_STATUS[
                      item.moimSubmissionState as keyof typeof MOIM_SUBMITTER_STATUS
                    ]
                  }
                </td>
                <td css={tdStyle}>
                  {item.moimSubmissionState === 'pendingApproval' ? (
                    <div>확인</div>
                  ) : (
                    <button onClick={() => handleButtonClick(item.moimSubmissionId || 0)}>
                      확인
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoimSubmitter;
