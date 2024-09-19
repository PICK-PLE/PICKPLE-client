import { useFetchMoimSubmitterList } from '@apis/domains/submitter/useFetchMoimSubmitter';
import { usePatchMoimSubmitter } from '@apis/domains/submitter/usePatchMoimSubmitter';

import {
  tableContainerStyle,
  tableLayoutStyle,
  tableStyle,
  titleStyle,
  trStyle,
} from '@pages/admin/components/MoimSubmitter/MoimSubmitter.style';

import { components } from '@schema';

type MoImSubmitterListGetResponse = components['schemas']['MoimSubmissionAllResponse'];

const MOIM_SUBMITTER_STATUS = {
  pendingPayment: '입금 대기',
  pendingApproval: '승인 대기',
  approved: '승인',
  rejected: '거절',
  refunded: '환불',
  completed: '완료',
};

const MoimSubmitter = () => {
  const { data: moimSubmitterList } = useFetchMoimSubmitterList() || [];
  const { mutate } = usePatchMoimSubmitter();

  const handleButtonClick = (moimSubmissionId: number) => {
    mutate({ moimSubmissionId });
  };

  const sortedMoimSubmitterList = moimSubmitterList?.sort((a, b) => {
    const idA = a.moimSubmissionId ?? Number.MAX_SAFE_INTEGER; // undefined일 경우 가장 뒤로 정렬
    const idB = b.moimSubmissionId ?? Number.MAX_SAFE_INTEGER;
    return idA - idB;
  });

  const renderApprovalStatus = (item: MoImSubmitterListGetResponse) => {
    switch (item.moimSubmissionState) {
      case 'pendingPayment':
        return <button onClick={() => handleButtonClick(item.moimSubmissionId || 0)}>확인</button>;

      case 'pendingApproval':
        return <div>확인</div>;

      default:
        return (
          <div>
            {MOIM_SUBMITTER_STATUS[item.moimSubmissionState as keyof typeof MOIM_SUBMITTER_STATUS]}
          </div>
        );
    }
  };

  return (
    <div css={tableLayoutStyle}>
      <h1 css={titleStyle}>PICKPLE 참가자 입금 확인</h1>
      <div css={tableContainerStyle}>
        <table css={tableStyle}>
          <thead>
            <tr css={trStyle}>
              <th>신청 순서</th>
              <th>신청 일시</th>
              <th>참가자 ID</th>
              <th>닉네임</th>
              <th>카카오 닉네임</th>
              <th>클래스 ID</th>
              <th>클래스명</th>
              <th>스픽커명</th>
              <th>[1] 질문</th>
              <th>[1] 답변 </th>
              <th>[2] 질문</th>
              <th>[2] 답변 </th>
              <th>[3] 질문</th>
              <th>[3] 답변</th>
              <th>상태</th>
              <th>승인여부</th>
            </tr>
          </thead>
          <tbody>
            {sortedMoimSubmitterList?.map((item) => (
              <tr key={item.moimSubmissionId} css={trStyle}>
                <td>{item.moimSubmissionId}</td>
                <td>{item.date}</td>
                <td>{item.guestId}</td>
                <td>{item.guestNickname}</td>
                <td>{item.kakaoNickname}</td>
                <td>{item.moimId}</td>
                <td>{item.moimTitle}</td>
                <td>{item.hostNickname}</td>
                <td>{item.questionList?.question1}</td>
                <td>{item.answerList?.answer1}</td>
                <td>{item.questionList?.question2}</td>
                <td>{item.answerList?.answer2}</td>
                <td>{item.questionList?.question3}</td>
                <td>{item.answerList?.answer3}</td>
                <td>
                  {
                    MOIM_SUBMITTER_STATUS[
                      item.moimSubmissionState as keyof typeof MOIM_SUBMITTER_STATUS
                    ]
                  }
                </td>
                <td>{renderApprovalStatus(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoimSubmitter;
