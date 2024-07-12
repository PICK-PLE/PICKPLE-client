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

const GuestMyPage = () => {
  return (
    <>
      <LogoHeader />
      <div css={GuestMyPageLayout}>
        <div css={userDistinguishWrapper}>
          <p css={userSelectedTextStyle}>게스트</p>
          <p css={userUnselectedTextStyle}>호스트</p>
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
