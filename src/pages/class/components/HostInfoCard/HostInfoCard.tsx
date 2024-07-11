import { Image, Label } from '@components';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import { HOST_INFO_DATA } from 'src/constants/mocks/hostInfoCardData';

import {
  hostInfoCardContainer,
  hostInfoCardWrapper,
  hostInfoTitleStyle,
  hostInfoLabelStyle,
  hostTitleStyle,
  hostNameStyle,
  countStyle,
} from './HostInfoCard.style';

interface HostCategories {
  category1: string;
  category2: string | null;
  category3: string | null;
}

const HostInfoCard = () => {
  const { hostNickName, hostImageUrl, count, hostCategories } = HOST_INFO_DATA;

  // 카테고리 키를 배열로 저장하는데, hostCategories 타입 지정! 왜냐면 category2, 3은 null이 나올 수도 있으니까
  const categoryKeys = Object.keys(hostCategories) as (keyof HostCategories)[];

  return (
    <div css={hostInfoCardContainer}>
      <Image variant="round" width="6.1rem" src={hostImageUrl} />

      <div css={hostInfoCardWrapper}>
        <div>
          <div css={hostInfoTitleStyle}>
            <span css={hostTitleStyle}>호스트</span>
            <span css={hostNameStyle}>{hostNickName}</span>
          </div>

          <span css={countStyle}>{`모임횟수 ${count} 회`}</span>
        </div>

        <div css={hostInfoLabelStyle}>
          {categoryKeys.map(key => {
            const category = hostCategories[key];
            return category ? (
              <Label key={key} variant="category" icon={CATEGORY_ICON[category]?.small}>
                {CATEGORY_NAME[category]}
              </Label>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default HostInfoCard;

