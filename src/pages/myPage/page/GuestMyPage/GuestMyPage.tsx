import { LogoHeader, NavigateBox, SimpleUserProfile } from '@components';
import {
  GuestMyPageLayout,
  navigateBoxWrapper,
  simpleUserProfileWrapper,
  userDistinguishWrapper,
  userSelectedTextStyle,
  userUnselectedTextStyle,
  line,
} from './GuestMyPage.style';
import { routePath } from '@constants';
import { useEasyNavigate } from '@hooks';

const GuestMyPage = () => {
  const { goGuestMyPage, goHostMyPage } = useEasyNavigate();
  return (
    <>
      <LogoHeader />
      <div css={GuestMyPageLayout}>
        <div css={userDistinguishWrapper}>
          <p css={userSelectedTextStyle} onClick={goHostMyPage}>
            게스트
          </p>
          <p css={userUnselectedTextStyle} onClick={goGuestMyPage}>
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
          <NavigateBox path="로그아웃 로직">로그아웃</NavigateBox>
        </article>
      </div>
    </>
  );
};

export default GuestMyPage;
