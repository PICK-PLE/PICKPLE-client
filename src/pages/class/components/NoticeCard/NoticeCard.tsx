import { IcSpickerMark, IcComment } from '@svg';
import { formatCreatedDate } from '@utils';

import {
  noticeCardContainer,
  noticeContent,
  noticeDate,
  noticeImage,
  noticeTitle,
  profileHostInfo,
  porfileHostMark,
  profileImage,
  profileName,
  profilePosition,
  profileTextBox,
  profileWrapper,
  noticeInfo,
  noticeCommentIcon,
  noticeComment,
  noticeCommentNumber,
  noticeWrapper,
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
          <span css={profilePosition}>스픽커</span>
          <div css={profileHostInfo}>
            <span css={profileName}>{hostNickName}</span>
            <IcSpickerMark css={porfileHostMark} />
          </div>
        </div>
      </section>
      <section css={noticeWrapper}>
        <h3 css={noticeTitle}>{title}</h3>
        <p css={noticeContent}>{content}</p>
        {noticeImageUrl && <img css={noticeImage} src={noticeImageUrl} alt="공지사항 이미지" />}
        <div css={noticeInfo}>
          <div css={noticeDate}>{formatCreatedDate(date ?? '')}</div>
          <div css={noticeComment}>
            <IcComment css={noticeCommentIcon} />
            <span css={noticeCommentNumber}>12</span>
            {/* 수정필요: 댓글 수 */}
          </div>
        </div>
      </section>
    </article>
  );
};

export default NoticeCard;
