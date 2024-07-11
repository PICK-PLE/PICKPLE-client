import { Image, Label } from '@components';
import { HOST_INFO_DATA } from '@pages/class/components/HostInfoCard/hostInfoData';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
import {
  hostInfoCardContainer,
  hostInfoCardWrapper,
  hostInfoTitleStyle,
  hostInfoLabelStyle,
  hostTitleStyle,
  hostNameStyle,
  countStyle,
} from '@pages/class/components/HostInfoCard/HostInfoCard.style';
const HostInfoCard = () => {
  const { category1, category2, category3 } = HOST_INFO_DATA.data.hostCategories;

  const getCategoryIcon = (category: string) => {
    return CATEGORY_ICON[category]?.small || null;
  };

  const getCategoryName = (category: string) => {
    return CATEGORY_NAME[category] || '';
  };

  return (
    <div css={hostInfoCardContainer}>
      <Image variant="round" width="6.1rem" height="6.1rem" />

      <div css={hostInfoCardWrapper}>
        <div>
          <div css={hostInfoTitleStyle}>
            <span css={hostTitleStyle}>호스트</span>
            <span css={hostNameStyle}>{HOST_INFO_DATA.data.hostNickName}</span>
          </div>

          <span css={countStyle}>모임횟수 {HOST_INFO_DATA.data.count} 회</span>
        </div>

        <div css={hostInfoLabelStyle}>
          <Label variant="category" icon={getCategoryIcon(category1)}>
            {getCategoryName(category1)}
          </Label>
          <Label variant="category" icon={getCategoryIcon(category2)}>
            {' '}
            {getCategoryName(category2)}
          </Label>
          <Label variant="category" icon={getCategoryIcon(category3)}>
            {' '}
            {getCategoryName(category3)}
          </Label>
        </div>
      </div>
    </div>
  );
};

export default HostInfoCard;
