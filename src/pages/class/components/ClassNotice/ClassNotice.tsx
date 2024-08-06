import { noticeCardContainer } from './ClassNotice.style';
import { NoticeCard } from '..';

import { components } from '@schema';

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
