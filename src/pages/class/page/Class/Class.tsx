import { NoticeCard } from '@pages/class/components/inedex';

import { NoticeCardData } from 'src/constants/mocks/NoticeCardData';

const Class = () => {
  return (
    <div>
      {NoticeCardData.map((data) => (
        <NoticeCard key={data.noticeId} noticeData={data} />
      ))}
    </div>
  );
};

export default Class;
