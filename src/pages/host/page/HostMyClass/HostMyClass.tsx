import { HostMyClassCard } from '@pages/host/components';

import { hostMyClassCardData } from 'src/constants/mocks/HostMyClassCardData';

const HostMyClass = () => {
  return (
    <>
      <div>HostMyClass</div>
      {hostMyClassCardData.map((data) => (
        <HostMyClassCard hostMyClassData={data} key={data.moimId} />
      ))}
    </>
  );
};

export default HostMyClass;
