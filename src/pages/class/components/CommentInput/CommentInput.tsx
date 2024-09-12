import { useRef } from 'react';

import { useFetchCommentList } from '@apis/domains/notice/useFetchCommentList';
import { usePostNoticeComment } from '@apis/domains/notice/usePostNoticeComment';

import { IcSend } from '@svg';

import {
  inputStyle,
  commentInputContainer,
  commentInputWrapper,
  iconStyle,
} from './CommentInput.style';

interface CommentInputProps {
  noticeId: string;
}
const CommentInput = ({ noticeId }: CommentInputProps) => {
  const { mutate: leaveComment } = usePostNoticeComment();
  const commentRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { refetch: refetchComments } = useFetchCommentList(noticeId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitComment();
  };

  const submitComment = () => {
    const commentContent = commentRef.current?.value.trim();
    if (!commentContent) return;
    leaveComment(
      { noticeId, commentContent: commentContent },
      { onSuccess: () => refetchComments() }
    );
    if (commentRef.current) commentRef.current.value = '';
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    formRef.current?.requestSubmit();
  };

  return (
    <form css={commentInputContainer} onSubmit={handleSubmit} ref={formRef}>
      <div css={commentInputWrapper}>
        <input ref={commentRef} css={inputStyle} placeholder="댓글을 남겨보세요" />
      </div>
      <div css={iconStyle} onClick={handleIconClick}>
        <IcSend />
      </div>
    </form>
  );
};

export default CommentInput;
