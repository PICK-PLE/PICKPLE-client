import { useState } from 'react';

import HostSubmitter from '@pages/admin/components/HostSubmitter/HostSubmitter';
import MoimSubmitter from '@pages/admin/components/MoimSubmitter/MoimSubmitter';
import {
  adminLayoutStyle,
  inputLayoutStyle,
  inputStyle,
  tabButtonStyle,
  tabTextStyle,
  tapLayoutStyle,
  titleStyle,
} from '@pages/admin/page/AdminPage/AdminPage.style';

const AdminPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [isHostSubmitterPage, setIsHostSubmitterPage] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsVerified(true);
    }
  };

  const handleButtonClick = (page: string) => {
    if (page === 'hostSubmitter') {
      setIsHostSubmitterPage(true);
    }

    if (page === 'moimSubmitter') {
      setIsHostSubmitterPage(false);
    }
  };

  return (
    <div>
      {isVerified ? (
        <div css={adminLayoutStyle}>
          <div css={tapLayoutStyle}>
            <h1 css={tabTextStyle}>PICKPLE</h1>
            <button css={tabButtonStyle} onClick={() => handleButtonClick('hostSubmitter')}>
              스픽커 승인
            </button>
            <button css={tabButtonStyle} onClick={() => handleButtonClick('moimSubmitter')}>
              참가자 입금 확인
            </button>
          </div>

          {isHostSubmitterPage ? <HostSubmitter /> : <MoimSubmitter />}
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

export default AdminPage;
