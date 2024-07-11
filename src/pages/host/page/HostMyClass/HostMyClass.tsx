import { HostMyClassCard } from '@pages/host/components';
import { hostMyClassCardData } from 'src/constants/mocks/HostMyClassCardData';

const HostMyClass = () => {
  return (
    <>
      <div>HostMyClass</div>
      <HostMyClassCard hostMyClassData={hostMyClassCardData} />
    </>
  );
};

export default HostMyClass;
