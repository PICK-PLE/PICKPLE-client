import { LogoHeader, NavigateBox, SimpleUserProfile } from '@components';
import {
  guestMyPageLayout,
  navigateBoxWrapper,
  simpleUserProfileWrapper,
  userDistinguishWrapper,
  userSelectedTextStyle,
  userUnselectedTextStyle,
  line,
  logoutBox,
  logoutTextStyle,
  iconStyle,
} from './GuestMyPage.style';
import { routePath } from '@constants';
import { useEasyNavigate } from '@hooks';
import { IcNext } from '@svg';
import { usePostLogout } from '@apis/domains/user';
import { isLoggedIn } from '@utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestMyPage = () => {
  const navigate = useNavigate();
  const { goGuestMyPage, goHostMyPage } = useEasyNavigate();
  const { mutate } = usePostLogout();

  const handleLogoutClick = () => {
    mutate();
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
        <div css={guestMyPageLayout}>
          <div css={userDistinguishWrapper}>
            <p css={userSelectedTextStyle} onClick={goGuestMyPage}>
              게스트
            </p>
            <p css={userUnselectedTextStyle} onClick={goHostMyPage}>
              호스트
            </p>
          </div>
          <article css={simpleUserProfileWrapper}>
            <SimpleUserProfile size="large" username="신청자" />
          </article>
          <div css={line} />
          <article css={navigateBoxWrapper}>
            <NavigateBox path={routePath.GUEST_MY_CLASS}>my 클래스 모임</NavigateBox>
            <NavigateBox path="오픈 카톡 링크">픽플에 문의하기</NavigateBox>
            <div css={logoutBox} onClick={handleLogoutClick}>
              <span css={logoutTextStyle}>로그아웃</span>
              <span css={iconStyle}>
                <IcNext />
              </span>
            </div>
          </article>
        </div>
      </>
    )
  );
};

export default GuestMyPage;
