import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { usePostNoticeComment } from '@apis/domains/notice/usePostNoticeComment';
import { QUERY_KEY } from '@apis/queryKeys/queryKeys';

import { IcSend, IcSendAble } from '@svg';

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
  const queryClient = useQueryClient();
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim().length === 0) return;
    submitComment();
  };

  const submitComment = () => {
    const commentContent = value.trim();
    leaveComment(
      { noticeId, commentContent: commentContent },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEY.COMMENT_LIST] });
          queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MOIM_NOTICE_DETAIL] });
        },
      }
    );
    if (value.length > 0) {
      setValue('');
    }
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    submitComment();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form css={commentInputContainer} onSubmit={handleSubmit}>
      <div css={commentInputWrapper}>
        <input
          value={value}
          onChange={handleInputChange}
          css={inputStyle}
          placeholder="댓글을 남겨보세요"
        />
      </div>
      <div css={iconStyle} onClick={handleIconClick}>
        {value.trim().length === 0 ? <IcSend /> : <IcSendAble />}
      </div>
    </form>
  );
};

export default CommentInput;
