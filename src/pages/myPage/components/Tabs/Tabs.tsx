import { useState } from 'react';
import { useEasyNavigate } from '@hooks';
import {
  userDistinguishWrapper,
  userSelectedTextStyle,
  userUnselectedTextStyle,
} from './Tabs.style';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<'guest' | 'host'>('guest');
  const { goGuestMyPage, goHostMyPage } = useEasyNavigate();

  const handleGuestClick = () => {
    setSelectedTab('guest');
    goGuestMyPage();
  };

  const handleHostClick = () => {
    setSelectedTab('host');
    goHostMyPage();
  };

  return (
    <div css={userDistinguishWrapper}>
      <p
        css={selectedTab === 'guest' ? userSelectedTextStyle : userUnselectedTextStyle}
        onClick={handleGuestClick}>
        게스트
      </p>
      <p
        css={selectedTab === 'host' ? userSelectedTextStyle : userUnselectedTextStyle}
        onClick={handleHostClick}>
        호스트
      </p>
    </div>
  );
};

export default Tabs;
