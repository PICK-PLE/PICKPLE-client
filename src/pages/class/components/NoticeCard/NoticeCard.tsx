import {
  noticeBox,
  noticeCardContainer,
  noticeContent,
  noticeDate,
  noticeTitle,
  profileImage,
  profileName,
  profilePosition,
  profileTextBox,
  profileWrapper,
} from './NoticeCard.style';
import { data } from './data';
import { formatCreatedDate } from '@utils';

// interface NoticeCardProps {}

const NoticeCard = () => {
  return (
    <article css={noticeCardContainer}>
      <section css={profileWrapper}>
        <img css={profileImage} src={data.hostImageUrl} alt={`${data.hostNickName}의 프로필`} />
        <div css={profileTextBox}>
          <span css={profilePosition}>호스트</span>
          <span css={profileName}>{data.hostNickName}</span>
        </div>
      </section>
      <section css={noticeBox}>
        <h3 css={noticeTitle}>{data.title}</h3>
        <p css={noticeContent}>{data.content}</p>
        <div css={noticeDate}>{formatCreatedDate(data.date)}</div>
      </section>
    </article>
  );
};

export default NoticeCard;
