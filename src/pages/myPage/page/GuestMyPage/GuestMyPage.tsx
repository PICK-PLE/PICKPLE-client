import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogoHeader, Modal, NavigateBox, SimpleUserProfile } from '@components';
import { images, routePath } from '@constants';
import { useEasyNavigate } from '@hooks';
import LogoutModal from '@pages/myPage/components/LogoutModal/LogoutModal';
import { userAtom } from '@stores';
import { IcNext } from '@svg';
import { isLoggedIn } from '@utils';

import {
  navigateBoxWrapper,
  logoutBox,
  logoutTextStyle,
  iconStyle,
  myPageNav,
  tabStyle,
  selectedTabStyle,
  divdier,
  profileWrapper,
} from './GuestMyPage.style';

const GuestMyPage = () => {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();
  const { goHostMyPage } = useEasyNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenKakaoClick = () => {
    window.open(`${import.meta.env.VITE_OPEN_KAKAO_URL}`, '_blank');
  };

  const handleLogoutClick = () => {
    handleModalOpen();
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    isLoggedIn() && (
      <>
        <LogoHeader isIcon={false} />
        <nav css={myPageNav}>
          <p css={[tabStyle, selectedTabStyle]}>참가자</p>
          <p css={[tabStyle]} onClick={goHostMyPage}>
            스픽커
          </p>
        </nav>
        <div css={profileWrapper}>
          <SimpleUserProfile
            size="xlarge"
            userImgUrl={images.GuestProfileImage}
            username={user.guestNickname || ''}
          />
        </div>
        <div css={divdier} />
        <article css={navigateBoxWrapper}>
          <NavigateBox path={routePath.GUEST_MY_CLASS}>my 클래스 모임</NavigateBox>
          <div css={logoutBox} onClick={handleOpenKakaoClick}>
            <span css={logoutTextStyle}>픽플에 문의하기</span>
            <span css={iconStyle}>
              <IcNext />
            </span>
          </div>
          <div css={logoutBox} onClick={handleLogoutClick}>
            <span css={logoutTextStyle}>로그아웃</span>
            <span css={iconStyle}>
              <IcNext />
            </span>
          </div>
        </article>

        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <LogoutModal onClose={handleModalClose} />
          </Modal>
        )}
      </>
    )
  );
};

export default GuestMyPage;
