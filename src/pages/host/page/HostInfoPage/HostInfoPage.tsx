import { Button, LogoHeader } from '@components';
import { hostInfoLayout } from '@pages/host/page/HostInfoPage/HostInfoPage.style';

const HostInfoPage = () => {
  return (
    <div>
      <LogoHeader />
      <div css={hostInfoLayout}>
        <div>
          <div>사진</div>
          <div>
            <span>민서 님</span>
            <span>10년차 요리 연구가</span>
          </div>
          <div>안녕하세요. 스픽커 그것은입니다. 아니 이것은입니다.</div>
          <div>
            <Button variant="xSmall">스픽커 더 알아보기</Button>
          </div>
        </div>
        <div>클래스/리뷰 탭</div>
      </div>
    </div>
  );
};

export default HostInfoPage;
