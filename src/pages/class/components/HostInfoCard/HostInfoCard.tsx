import { Image, Label } from '@components';
import { HOST_INFO_DATA } from '@pages/class/components/HostInfoCard/hostInfoData';
const HostInfoCard = () => {
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
          <Label variant="category">{HOST_INFO_DATA.data.hostCategories.category1}</Label>
          <Label variant="category">{HOST_INFO_DATA.data.hostCategories.category2}</Label>
          <Label variant="category">{HOST_INFO_DATA.data.hostCategories.category3}</Label>
        </div>
      </div>
    </>
  );
};

export default HostInfoCard;
