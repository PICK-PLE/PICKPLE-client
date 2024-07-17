import { components } from '@schema';
import { NoticeCard } from '..';

import { noticeCardContainer } from './ClassNotice.style';

type NoticeListGetByMoimResponse = components['schemas']['NoticeListGetByMoimResponse'];

interface ClassNoticeProps {
  noticeData: NoticeListGetByMoimResponse[];
}

const ClassNotice = ({ noticeData }: ClassNoticeProps) => {
  return (
    <div css={noticeCardContainer}>
      {noticeData.map((data) => (
        <NoticeCard key={data.noticeId} noticeData={data} />
      ))}
    </div>
  );
};

export default ClassNotice;
