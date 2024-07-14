import { NoticeCard } from '..';
import { NoticeResponseType } from '@types';

import { noticeCardContainer } from './ClassNotice.style';

interface ClassNoticeProps {
  noticeData: NoticeResponseType[];
}

const ClassNotice = ({ noticeData }: ClassNoticeProps) => {
  return (
    <article css={noticeCardContainer}>
      {noticeData.map((data) => (
        <NoticeCard key={data.noticeId} noticeData={data} />
      ))}
    </article>
  );
};

export default ClassNotice;
