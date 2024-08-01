
import { useFetchMoimHost } from '@apis/domains/host';

import { Image, Label } from '@components';
import { CATEGORY_NAME, CATEGORY_SMALL_ICON, images } from '@constants';


import {
  hostInfoCardContainer,
  hostInfoCardWrapper,
  hostInfoTitleStyle,
  hostInfoLabelStyle,
  hostTitleStyle,
  hostNameStyle,
  countStyle,
  imageStyle,
} from './HostInfoCard.style';

interface HostInfoCardProps {
  hostId: number;
}

const HostInfoCard = ({ hostId }: HostInfoCardProps) => {
  const { data: moimHostData } = useFetchMoimHost(hostId);

  const { hostNickName, hostImageUrl, count, hostCategoryList } = moimHostData ?? {};

  return (
    <div css={hostInfoCardContainer}>
      <Image
        variant="round"
        width="6.1rem"
        src={images.HostProfileImage || hostImageUrl}
        customStyle={imageStyle}
      />

      <div css={hostInfoCardWrapper}>
        <div>
          <div css={hostInfoTitleStyle}>
            <span css={hostTitleStyle}>호스트</span>
            <span css={hostNameStyle}>{hostNickName}</span>
          </div>

          <span css={countStyle}>{`모임횟수 ${count} 회`}</span>
        </div>

        <div css={hostInfoLabelStyle}>
          {Object.values(hostCategoryList || []).map((value, index) => {
            return value ? (
              <Label
                key={`host-category-${index}`}
                variant="category"
                icon={CATEGORY_SMALL_ICON[value]}>
                {CATEGORY_NAME[value]}
              </Label>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default HostInfoCard;
