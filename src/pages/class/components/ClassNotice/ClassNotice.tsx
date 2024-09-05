import { noticeCardContainer } from './ClassNotice.style';
import { NoticeCard } from '..';
import { components } from '@schema';
import { useNavigate } from 'react-router-dom';

type NoticeListGetByMoimResponse = components['schemas']['NoticeListGetByMoimResponse'];

interface ClassNoticeProps {
  noticeData: NoticeListGetByMoimResponse[];
  moimId: string;
}

const ClassNotice = ({ noticeData, moimId }: ClassNoticeProps) => {
  const navigate = useNavigate();
  const handleNoticeCardClick = (noticeId: number) => {
    navigate(`/class/${moimId}/notice/${noticeId.toString()}`);
  };

  return (
    <div css={noticeCardContainer}>
      {noticeData.map((data) => (
        <NoticeCard
          key={data.noticeId}
          noticeData={data}
          onClick={() => handleNoticeCardClick(data.noticeId ?? 0)}
        />
      ))}
    </div>
  );
};

export default ClassNotice;
