import { Button, Image, LogoHeader } from '@components';
import { images } from '@constants';
import { hostNameStyle } from '@pages/class/components/HostInfoCard/HostInfoCard.style';
import {
  hostBackgroundImage,
  hostDescriptionStyle,
  hostDescriptionWrapper,
  hostImageWrapper,
  hostInfoLayout,
  hostKeywordStyle,
  hostMarkIconStyle,
  hostMarkMessageStyle,
  hostMarkMessageWrapper,
  hostNameMarkWrapper,
  hostNameWrapper,
  hostProfileContainer,
  hostProfileImage,
  hostProfileStyle,
  hostProfileWrapper,
} from '@pages/host/page/HostInfoPage/HostInfoPage.style';
import { IcSpickerMark } from '@svg';

const HostInfoPage = () => {
  return (
    <div>
      <LogoHeader />
      <div css={hostInfoLayout}>
        <article>
          <section css={hostImageWrapper}>
            <Image src={images.HostBackGroundImage} customStyle={hostBackgroundImage} />
            <div css={hostProfileImage}>
              <Image src={images.HostProfileImage} variant="round" width="8.2rem" />
            </div>
          </section>

          <section css={hostProfileContainer}>
            <div css={hostProfileWrapper}>
              <div css={hostProfileStyle}>
                <div css={hostNameMarkWrapper}>
                  <div css={hostNameWrapper}>
                    <p css={hostNameStyle}>민서 님</p>
                    <IcSpickerMark css={hostMarkIconStyle} />
                  </div>

                  <div css={hostMarkMessageWrapper}>
                    <span css={hostMarkMessageStyle}>베테랑</span>
                  </div>
                </div>

                <span css={hostKeywordStyle}>방구석 요리 전문가</span>
              </div>
              <div css={hostDescriptionWrapper}>
                <span css={hostDescriptionStyle}>
                  안녕하세요, 스픽커 그것은입니다. 아니 이것은입니다.안녕하세요, 스픽커
                  그것은입니다. 아니 이것은입니다. 잘 부탁드립니다 홧팅
                </span>
              </div>
            </div>

            <Button variant="xSmall">스픽커 더 알아보기</Button>
          </section>
        </article>

        <article>클래스/리뷰 탭</article>
      </div>
    </div>
  );
};

export default HostInfoPage;
