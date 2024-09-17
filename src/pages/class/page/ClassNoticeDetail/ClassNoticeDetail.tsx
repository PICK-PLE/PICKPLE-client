import { useParams } from 'react-router-dom';

import { useFetchCommentList } from '@apis/domains/notice/useFetchCommentList';
import { useFetchMoimNoticeDetail } from '@apis/domains/notice/useFetchMoimNoticeDetail';

import { Header } from '@components';
import CommentBox from '@pages/class/components/\bCommentBox/CommentBox';
import ClassCommentListEmptyView from '@pages/class/components/ClassCommentListEmptyView/ClassCommentListEmptyView';
import CommentInput from '@pages/class/components/CommentInput/CommentInput';
import HostProfileCard from '@pages/class/components/HostProfileCard/HostProfileCard';
import { formatCreatedDate } from '@utils';

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
  commentListWrapper,
} from './ClassNoticeDetail.style';

import { MoimIdPathParameterType, NoticeIdPathParameterType } from '@types';

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
            <HostProfileCard
              data={noticeDetail ?? {}}
              noticeId={noticeId ?? ''}
              moimId={moimId ?? ''}
            />
            <section>
              <h3 css={noticeTitle}>{noticeDetail?.title}</h3>
              <p css={noticeContent}>{noticeDetail?.content}</p>
              {noticeDetail?.noticeImageUrl && (
                <img css={noticeImage} src={noticeDetail?.noticeImageUrl} alt="공지사항 이미지" />
              )}
              <div css={noticeDate}>{formatCreatedDate(noticeDetail?.dateTime ?? '')}</div>
            </section>
          </article>

          <div css={line} />
          <div css={commentNumber}>댓글 {noticeDetail?.commentNumber}</div>
          {commentList?.length === 0 ? (
            <ClassCommentListEmptyView />
          ) : (
            <div css={commentListWrapper}>
              {commentList?.map((comment) => (
                <CommentBox
                  key={comment.commentId}
                  comment={comment}
                  noticeId={noticeId ?? ''}
                  host={noticeDetail?.isOwner}
                />
              ))}
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
