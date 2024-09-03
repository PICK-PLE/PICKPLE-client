import { useFetchMoimHost } from '@apis/domains/host';

import { Image } from '@components';
import { images } from '@constants';
import { IcSpickerMark } from '@svg';

import {
  hostNameStyle,
  hostInfoWrapper,
  hostProfileWrapper,
  hostNameMarkWrapper,
  hostNameWrapper,
  hostMarkIconStyle,
  hostMarkMessageWrapper,
  hostMarkMessageStyle,
  hostKeywordStyle,
  hostDescriptionWrapper,
} from './HostInfoCard.style';

interface HostInfoCardProps {
  hostId: number;
}

const HostInfoCard = ({ hostId }: HostInfoCardProps) => {
  const { data: moimHostData } = useFetchMoimHost(hostId);

  const { hostNickName, hostImageUrl, count, keyword, description } = moimHostData ?? {};

  return (
    <div css={hostInfoWrapper}>
      <Image variant="round" width="6rem" src={images.HostProfileImage || hostImageUrl} />

      <div css={hostProfileWrapper}>
        <div css={hostNameMarkWrapper}>
          <div css={hostNameWrapper}>
            <p css={hostNameStyle}>{hostNickName}</p>
            <IcSpickerMark css={hostMarkIconStyle} />
          </div>
          {count >= 2 ? (
            <div css={hostMarkMessageWrapper}>
              <span css={hostMarkMessageStyle}>베테랑</span>
            </div>
          ) : null}
        </div>
        <span css={hostKeywordStyle}>{keyword}</span>
        <span css={hostDescriptionWrapper}>{description}</span>
      </div>
    </div>
  );
};

export default HostInfoCard;
