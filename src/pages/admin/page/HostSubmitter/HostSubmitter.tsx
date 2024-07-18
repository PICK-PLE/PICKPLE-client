import { useFetchHostSubmitterList } from '@apis/domains/submitter/useFetchHostSubmitterList';
import {
  PatchHostSubmitterRequest,
  usePatchHostSubmitter,
} from '@apis/domains/submitter/usePatchHostSubmitter';
import { CATEGORY_NAME } from '@constants';
import {
  tableContainerStyle,
  tableLayoutStyle,
  tableStyle,
  tdStyle,
  thLargeStyle,
  thSmallStyle,
} from '@pages/admin/page/HostSubmitter/HostSubmitter.style';
import { titleStyle } from '@pages/auth/page/Login/Login.style';
import { useEffect } from 'react';

export const SUBMITTER_STATUS = {
  approve: '승인 완료',
  pending: '승인 대기',
};

const HostSubmitter = () => {
  const { data: hostSubmitterList, refetch } = useFetchHostSubmitterList() || [];
  const { mutate } = usePatchHostSubmitter();

  useEffect(() => {
    refetch();
  }, [hostSubmitterList, refetch]);

  if (hostSubmitterList === null || hostSubmitterList === undefined) {
    return null;
  }
  console.log(hostSubmitterList);

  const handleButtonClick = (submitterId) => {
    mutate({ submitterId } as PatchHostSubmitterRequest, {
      onSuccess: () => {
        refetch(); 
      },
    });
  };

  return (
    <div css={tableLayoutStyle}>
      <h1 css={titleStyle}>PickPle 호스트 승인</h1>
      <div css={tableContainerStyle}>
        <table css={tableStyle}>
          <thead>
            <tr>
              <th css={thSmallStyle}>신청 순서</th>
              <th css={thSmallStyle}>게스트 ID</th>
              <th css={thSmallStyle}>닉네임</th>
              <th css={thLargeStyle}>[1] 호스트 소개</th>
              <th css={thLargeStyle}>[2] 모임 목표</th>
              <th css={thLargeStyle}>[3] 호스트 설명 링크</th>
              <th css={thSmallStyle}>[4] 호스트 닉네임</th>
              <th css={thSmallStyle}>[5] 카테고리 </th>
              <th css={thLargeStyle}>[6] 모임 계획</th>
              <th css={thLargeStyle}>[7] 이메일 </th>
              <th css={thSmallStyle}> 상태 </th>
              <th css={thSmallStyle}> 승인여부 </th>
            </tr>
          </thead>
          <tbody>
            {hostSubmitterList.map((item, index) => (
              <tr key={index}>
                <td css={tdStyle}>{item.submitterId}</td>
                <td css={tdStyle}>{item.guestId}</td>
                <td css={tdStyle}>{item.guestNickname}</td>
                <td css={tdStyle}>{item.intro}</td>
                <td css={tdStyle}>{item.goal}</td>
                <td css={tdStyle}>
                  {' '}
                  <a href={`${item.link}`}>{item.link}</a>
                </td>
                <td css={tdStyle}>{item.nickname}</td>
                <td css={tdStyle}>
                  {Object.values(item.categoryList)
                    .map((value) => CATEGORY_NAME[value])
                    .join(', ')}
                </td>
                <td css={tdStyle}>{item.plan}</td>
                <td css={tdStyle}>{item.email}</td>
                <td css={tdStyle}>{SUBMITTER_STATUS[item.submitterState]}</td>
                <td css={tdStyle}>
                  {
                  item.submitterState === "approve"
                  ?
                  <div>승인</div>
                  :
                  <button onClick={() => handleButtonClick(item.submitterId)}>승인</button>
                  }

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
