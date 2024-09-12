import { useNavigate } from 'react-router-dom';

import { Button, Image } from '@components';
import { images } from '@constants';
import { IcDropdownRight, IcSpickerMark } from '@svg';

import {
  hostCountColorStyle,
  hostCountWrapper,
  hostDetailWrapper,
  hostInfoCardWithLinkContainer,
  hostInfoCardWithLinkLayout,
  hostInfoCardWithLinkWrapper,
  hostInfoCardWrapper,
  hostInfoWrapper,
  hostKeywordStyle,
  hostMarkIconStyle,
  hostMarkMessageStyle,
  hostMarkMessageWrapper,
  hostNameMarkWrapper,
  hostNameStyle,
  hostNameWrapper,
  hostProfileWrapper,
  nextIconStyle,
} from './HostInfoCardWithLink.style';

import { components } from '@schema';

type HostGetResponse = components['schemas']['HostGetResponse'];

interface hostInfoCardWithLinkListProps {
  hostInfoCardWithLinkList: HostGetResponse;
}
const HostInfoCardWithLink = ({ hostInfoCardWithLinkList }: hostInfoCardWithLinkListProps) => {
  const navigate = useNavigate();
  const { hostNickName, hostImageUrl, keyword, moimCount, attendeeCount, hostId } =
    hostInfoCardWithLinkList;

  const handleButtonClick = () => {
    navigate('/class/post/step1');
  };

  const handleHostInfoButtonClick = () => {
    navigate(`/host/info/${hostId}`);
  };

  return (
    <section css={hostInfoCardWithLinkLayout}>
      <div css={hostInfoCardWithLinkContainer}>
        <section css={hostInfoCardWithLinkWrapper}>
          <article css={hostInfoCardWrapper}>
            <div css={hostInfoWrapper}>
              <Image variant="round" width="6rem" src={hostImageUrl ?? images.HostProfileImage} />

              <div css={hostDetailWrapper}>
                <div css={hostProfileWrapper}>
                  <div css={hostNameMarkWrapper}>
                    <div css={hostNameWrapper}>
                      <p css={hostNameStyle}>{hostNickName}</p>
                      <IcSpickerMark css={hostMarkIconStyle} />
                    </div>
                    {moimCount && moimCount >= 2 ? (
                      <div css={hostMarkMessageWrapper}>
                        <span css={hostMarkMessageStyle}>베테랑</span>
                      </div>
                    ) : null}
                  </div>
                  <span css={hostKeywordStyle}>{keyword}</span>
                </div>

                <div css={hostCountWrapper}>
                  <span css={hostCountColorStyle}>{moimCount}회</span>의 클래스로,{' '}
                  <span css={hostCountColorStyle}>{attendeeCount}명</span>과 함께 했어요!
                </div>
              </div>
            </div>

            <IcDropdownRight css={nextIconStyle} onClick={handleHostInfoButtonClick} />
          </article>

          <Button variant="small" onClick={handleButtonClick}>
            클래스 모임 개설하기
          </Button>
        </section>
      </div>
    </section>
  );
};

export default HostInfoCardWithLink;
