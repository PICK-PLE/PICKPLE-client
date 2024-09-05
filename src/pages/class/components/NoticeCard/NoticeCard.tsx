import { formatCreatedDate } from '@utils';

import {
  noticeCardContainer,
  noticeContent,
  noticeDate,
  noticeImage,
  noticeTitle,
  profileImage,
  profileName,
  profilePosition,
  profileTextBox,
  profileWrapper,
} from './NoticeCard.style';

import { components } from '@schema';

type NoticeListGetByMoimResponse = components['schemas']['NoticeListGetByMoimResponse'];

interface NoticeCardProps {
  noticeData: NoticeListGetByMoimResponse;
  onClick: () => void;
}

const NoticeCard = ({ noticeData, onClick }: NoticeCardProps) => {
  const { hostNickName, hostImageUrl, title, content, date, noticeImageUrl } = noticeData;

  return (
    <article css={noticeCardContainer} onClick={onClick}>
      <section css={profileWrapper}>
        <img css={profileImage} src={hostImageUrl} alt={`${hostNickName}의 프로필`} />
        <div css={profileTextBox}>
          <span css={profilePosition}>호스트</span>
          <span css={profileName}>{hostNickName}</span>
        </div>
      </section>
      <section>
        <h3 css={noticeTitle}>{title}</h3>
        <p css={noticeContent}>{content}</p>
        {noticeImageUrl && <img css={noticeImage} src={noticeImageUrl} alt="공지사항 이미지" />}
        <div css={noticeDate}>{formatCreatedDate(date ?? '')}</div>
      </section>
    </article>
  );
};

export default NoticeCard;
