import { useFetchHostSubmitterList } from '@apis/domains/submitter/useFetchHostSubmitterList';
import { usePatchHostSubmitter } from '@apis/domains/submitter/usePatchHostSubmitter';

import {
  tableContainerStyle,
  tableLayoutStyle,
  tableStyle,
  titleStyle,
  trStyle,
} from '@pages/admin/components/HostSubmitter/HostSubmitter.style';

const SUBMITTER_STATUS = {
  approve: '승인 완료',
  pending: '승인 대기',
};

const HostSubmitter = () => {
  const { data: hostSubmitterList } = useFetchHostSubmitterList() || [];
  const { mutate } = usePatchHostSubmitter();

  const handleButtonClick = (submitterId: number) => {
    mutate({ submitterId });
  };

  const sortedHostSubmitterList = hostSubmitterList?.sort((a, b) => {
    const idA = a.submitterId ?? Number.MAX_SAFE_INTEGER; // undefined일 경우 가장 뒤로 정렬
    const idB = b.submitterId ?? Number.MAX_SAFE_INTEGER;
    return idA - idB;
  });

  return (
    <div css={tableLayoutStyle}>
      <h1 css={titleStyle}>PICKPLE 스픽커 승인</h1>
      <div css={tableContainerStyle}>
        <table css={tableStyle}>
          <thead>
            <tr css={trStyle}>
              <th>신청 순서</th>
              <th>참가자 ID</th>
              <th>닉네임</th>
              <th>[1] 스픽커 소개</th>
              <th>[2] 클래스 목표</th>
              <th>[3] 스픽커 설명 링크</th>
              <th>[4] 스픽커 닉네임</th>
              <th>[5] 키워드 </th>
              <th>[6] 클래스 계획</th>
              <th>[7] 이메일 </th>
              <th> 상태 </th>
              <th> 승인여부 </th>
            </tr>
          </thead>
          <tbody>
            {sortedHostSubmitterList?.map((item) => (
              <tr key={item.submitterId} css={trStyle}>
                <td>{item.submitterId}</td>
                <td>{item.guestId}</td>
                <td>{item.guestNickname}</td>
                <td>{item.intro}</td>
                <td>{item.goal}</td>
                <td>
                  <a href={`${item.link}`} target="_blank">
                    {item.link}
                  </a>
                </td>
                <td>{item.nickname}</td>
                <td>{item.userKeyword}</td>
                <td>{item.plan}</td>
                <td>{item.email}</td>
                <td>{SUBMITTER_STATUS[item.submitterState as keyof typeof SUBMITTER_STATUS]}</td>
                <td>
                  {item.submitterState === 'approve' ? (
                    <div>승인</div>
                  ) : (
                    <button onClick={() => handleButtonClick(item.submitterId || 0)}>승인</button>
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

export default HostSubmitter;
