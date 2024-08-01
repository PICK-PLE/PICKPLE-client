import { useEffect, useState } from 'react';


import { useFetchHostSubmitterList } from '@apis/domains/submitter/useFetchHostSubmitterList';
import { usePatchHostSubmitter } from '@apis/domains/submitter/usePatchHostSubmitter';

import { CATEGORY_NAME } from '@constants';
import {
  adminLayoutStyle,
  inputLayoutStyle,
  inputStyle,
  tableContainerStyle,
  tableLayoutStyle,
  tableStyle,
  tdStyle,
  thStyle,
} from '@pages/admin/page/HostSubmitter/HostSubmitter.style';
import { titleStyle } from '@pages/auth/page/Login/Login.style';

const SUBMITTER_STATUS = {
  approve: '승인 완료',
  pending: '승인 대기',
};

const HostSubmitter = () => {
  const { data: hostSubmitterList, refetch } = useFetchHostSubmitterList() || [];
  const { mutate } = usePatchHostSubmitter();
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    refetch();
  }, [hostSubmitterList, refetch]);

  if (hostSubmitterList === null || hostSubmitterList === undefined) {
    return null;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsVerified(true);
    }
  };

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
    <div css={adminLayoutStyle}>
      {isVerified ? (
        <div css={tableLayoutStyle}>
          <h1 css={titleStyle}>PickPle 호스트 승인</h1>
          <div css={tableContainerStyle}>
            <table css={tableStyle}>
              <thead>
                <tr>
                  <th css={thStyle}>신청 순서</th>
                  <th css={thStyle}>게스트 ID</th>
                  <th css={thStyle}>닉네임</th>
                  <th css={thStyle}>[1] 호스트 소개</th>
                  <th css={thStyle}>[2] 모임 목표</th>
                  <th css={thStyle}>[3] 호스트 설명 링크</th>
                  <th css={thStyle}>[4] 호스트 닉네임</th>
                  <th css={thStyle}>[5] 카테고리 </th>
                  <th css={thStyle}>[6] 모임 계획</th>
                  <th css={thStyle}>[7] 이메일 </th>
                  <th css={thStyle}> 상태 </th>
                  <th css={thStyle}> 승인여부 </th>
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
                      <a href={`${item.link}`} target="_blank">
                        {item.link}
                      </a>
                    </td>
                    <td css={tdStyle}>{item.nickname}</td>
                    <td css={tdStyle}>
                      {Object.values(item.categoryList || {})
                        .map((value) => CATEGORY_NAME[value])
                        .join(', ')}
                    </td>
                    <td css={tdStyle}>{item.plan}</td>
                    <td css={tdStyle}>{item.email}</td>
                    <td css={tdStyle}>
                      {SUBMITTER_STATUS[item.submitterState as keyof typeof SUBMITTER_STATUS]}
                    </td>
                    <td css={tdStyle}>
                      {item.submitterState === 'approve' ? (
                        <div>승인</div>
                      ) : (
                        <button onClick={() => handleButtonClick(item.submitterId || 0)}>
                          승인
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div css={inputLayoutStyle}>
          <span css={titleStyle}>관리자 비밀번호를 입력하세요</span>
          <input css={inputStyle} type="password" value={password} onChange={handleInputChange} />
        </div>
      )}
    </div>
  );
};

export default HostSubmitter;
