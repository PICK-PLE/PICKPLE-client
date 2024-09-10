import { useFetchMoimNoticeDetail } from '@apis/domains/notice/useFetchMoimNoticeDetail';

import { MoimIdPathParameterType, NoticeIdPathParameterType } from '@types';
import { formatCreatedDate } from '@utils';
import { useParams } from 'react-router-dom';
import {
  line,
  commentNumber,
  classNoticeDetailContainer,
  noticeCardContainer,
  noticeTitle,
  noticeContent,
  noticeImage,
  noticeDate,
  noticeLayout,
  iconStyle,
  textStyle,
  emptyViewContainer,
  commentListWrapper,
} from './ClassNoticeDetail.style';

import CommentBox from '@pages/class/components/\bCommentBox/CommentBox';
import CommentInput from '@pages/class/components/CommentInput/CommentInput';
import { useFetchCommentList } from '@apis/domains/notice/useFetchCommentList';
import { Header } from '@components';
import HostProfileCard from '@pages/class/components/HostProfileCard/HostProfileCard';
import { IcCommentListEmpty } from '@svg';

const ClassNoticeDetail = () => {
  const { moimId } = useParams<MoimIdPathParameterType>();
  const { noticeId } = useParams<NoticeIdPathParameterType>();

  const { data: noticeDetail } = useFetchMoimNoticeDetail(moimId ?? '', noticeId ?? '');
  const { data: commentList } = useFetchCommentList(noticeId ?? '');

  return (
    <>
      <div css={classNoticeDetailContainer}>
        <Header title="공지사항" isLine={true} />
        {/* @notice NoticeCard와 똑같은 스타일 코드인데, props 타입이 달라서 그대로 들고 왔습니다. */}
        <div css={noticeLayout}>
          <article css={noticeCardContainer}>
            <HostProfileCard data={noticeDetail ?? {}} />
            <section>
              <h3 css={noticeTitle}>{noticeDetail?.title}</h3>
              <p css={noticeContent}>{noticeDetail?.content}</p>
              {noticeDetail?.noticeImageUrl && (
                <img css={noticeImage} src={noticeDetail?.noticeImageUrl} alt="공지사항 이미지" />
              )}
              <div css={noticeDate}>{formatCreatedDate(noticeDetail?.dateTime ?? '')}시간 전</div>
            </section>
          </article>

          <div css={line} />
          <div css={commentNumber}>댓글 {noticeDetail?.commentNumber}</div>
          {/* @정안TODO map에 key 설정 */}
          {commentList?.length === 0 ? (
            <div css={emptyViewContainer}>
              <span css={iconStyle}>
                <IcCommentListEmpty />
              </span>
              <div>
                <p css={textStyle}>아직 작성된 댓글이 없어요.</p>
              </div>
            </div>
          ) : (
            <div css={commentListWrapper}>
              {commentList?.map((comment) => <CommentBox comment={comment} />)}
            </div>
          )}
          <footer>
            <CommentInput noticeId={noticeId ?? ''} />
          </footer>
        </div>
      </div>
    </>
  );
};

export default ClassNoticeDetail;
