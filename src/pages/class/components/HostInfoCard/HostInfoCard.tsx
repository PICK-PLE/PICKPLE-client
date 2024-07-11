import { Image, Label } from '@components';
import { HOST_INFO_DATA } from '@pages/class/components/HostInfoCard/hostInfoData';
import { CATEGORY_ICON, CATEGORY_NAME } from 'src/constants/category';
const HostInfoCard = () => {
    const { category1, category2, category3 } = HOST_INFO_DATA.data.hostCategories;

    const getCategoryIcon = (category: string) => {
        return CATEGORY_ICON[category]?.small || null;
      };
    
      const getCategoryName = (category: string) => {
        return CATEGORY_NAME[category] || '';
      };

  return (
    <>
      <div>
        <Image variant="round" width="61px" height="61px" />
        <div>
          <p>호스트</p>
          <p>{HOST_INFO_DATA.data.hostNickName}</p>
        </div>
        <p>{HOST_INFO_DATA.data.count}</p>

        <div>
          <Label variant="category" icon={getCategoryIcon(category1)}>{getCategoryName(category1)}</Label>
          <Label variant="category"icon={getCategoryIcon(category2)}> {getCategoryName(category2)}</Label>
          <Label variant="category"icon={getCategoryIcon(category3)}> {getCategoryName(category3)}</Label>
        </div>
      </div>
    </>
  );
};

export default HostInfoCard;
