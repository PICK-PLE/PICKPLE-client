import { useEffect } from 'react';

import { useFetchMoimSubmitterList } from '@apis/domains/submitter/useFetchMoimSubmitter';

import {
  tableContainerStyle,
  tableLayoutStyle,
  tableStyle,
  tdStyle,
  thStyle,
  titleStyle,
} from '@pages/admin/components/MoimSubmitter/MoimSubmitter.style';

const MOIM_SUBMITTER_STATUS = {
  pendingPayment: '입금 대기',
  pendingApproval: '승인 대기',
};

const MoimSubmitter = () => {
  const { data: moimSubmitterList, refetch } = useFetchMoimSubmitterList() || [];

  useEffect(() => {
    refetch();
  }, [moimSubmitterList, refetch]);

  if (moimSubmitterList === null || moimSubmitterList === undefined) {
    return null;
  }

  const handleButtonClick = (submitterId: number) => {
    // mutate(
    //   { submitterId },
    //   {
    //     onSuccess: () => {
    //       refetch();
    //     },
    //   }
    // );
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
            {moimSubmitterList.map((item, index) => (
              <tr key={index}>
                <td css={tdStyle}>{item.moimSubmissionId}</td>
                <td css={tdStyle}>{item.date}</td>
                <td css={tdStyle}>{item.guestId}</td>
                <td css={tdStyle}>{item.guestNickname}</td>
                <td css={tdStyle}>{item.kakaoNickname}</td>
                <td css={tdStyle}>{item.moimId}</td>
                <td css={tdStyle}>{item.moimTitle}</td>
                <td css={tdStyle}>{item.hostNickname}</td>
                <td css={tdStyle}>{item.questionList?.question1}</td>
                <td css={tdStyle}>{item.answerList?.answer1}</td>
                <td css={tdStyle}>{item.questionList?.question2}</td>
                <td css={tdStyle}>{item.answerList?.answer2}</td>
                <td css={tdStyle}>{item.questionList?.question3}</td>
                <td css={tdStyle}>{item.answerList?.answer3}</td>
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
