import { LogoHeader, NavigateBox } from '@components';
import {
  hostMyPageLayout,
  line,
  navigateBoxContainer,
  navigateBoxWrapper,
  userDistinguishWrapper,
  userSelectedTextStyle,
  userUnselectedTextStyle,
} from './HostMyPage.style';
import { useEasyNavigate } from '@hooks';
import HostInfoCardWithLink from '@pages/myPage/components/HostInfoCardWithLink/HostInfoCardWithLink';
import { routePath } from '@constants';
import { useFetchMyHost } from '@apis/domains/moim/useFetchMyHost';
import { HostMyPageEmptyView } from '@pages/myPage/components';

const HostMyPage = () => {
  const { data: hostInfoCardWithLinkList } = useFetchMyHost();
  const { goGuestMyPage, goHostMyPage } = useEasyNavigate();

  /**@정안TODO 엠티뷰 위치 수정해야할듯. 헤더랑 탭 보이고 그 아래에 엠티뷰 보이게 어케함? */
  if (!hostInfoCardWithLinkList) {
    return (
      <div>
        <HostMyPageEmptyView />
      </div>
    );
  }

  return (
    <>
      <LogoHeader isIcon={false} />
      <div css={hostMyPageLayout}>
        <div css={userDistinguishWrapper}>
          <p css={userUnselectedTextStyle} onClick={goGuestMyPage}>
            게스트
          </p>
          <p css={userSelectedTextStyle} onClick={goHostMyPage}>
            호스트
          </p>
        </div>
        {!hostInfoCardWithLinkList.hostNickName ? (
          <HostMyPageEmptyView />
        ) : (
          <>
            <HostInfoCardWithLink hostInfoCardWithLinkList={hostInfoCardWithLinkList} />
            <section css={navigateBoxContainer}>
              <div css={line} />
              <article css={navigateBoxWrapper}>
                <NavigateBox path={routePath.HOST_MY_CLASS}>my 클래스 모임</NavigateBox>
                <NavigateBox path="오픈 카톡 링크">픽플에 문의하기</NavigateBox>
                <NavigateBox path="로그아웃 로직">로그아웃</NavigateBox>
              </article>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default HostMyPage;
