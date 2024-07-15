import { NoticeCard } from '..';
import { MoimNotceType } from '@types';

import { noticeCardContainer } from './ClassNotice.style';

interface ClassNoticeProps {
  noticeData: MoimNotceType[];
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
