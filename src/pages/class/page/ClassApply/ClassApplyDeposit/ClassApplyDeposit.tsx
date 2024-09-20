import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@components';
import { GuestClassRegisterCard } from '@pages/class/components';
import { ClassApplyProps } from '@pages/class/page/ClassApply/ClassApplyRule/ClassApplyRule';

import {
  depositArticleLayout,
  depositFooterStyle,
  depositHStyle,
  depositSpanStyle,
  depositMainStyle,
  dipositWrapperStyle,
  depositHeaderStyle,
} from './ClassApplyDeposit.style';

import { MoimIdPathParameterType } from '@types';

const ClassApplyDeposit = ({ handlePageChange }: ClassApplyProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { moimId } = useParams<MoimIdPathParameterType>();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <article css={depositArticleLayout}>
      <div css={dipositWrapperStyle}>
        <header css={depositHeaderStyle}>
          <span css={depositSpanStyle}>클래스 모임 신청</span>
          <h1 css={depositHStyle}>
            클래스 신청이 완료되었어요! <br /> 이제 참가비를 입금해 주세요.
          </h1>
        </header>

        <main css={depositMainStyle}>
          <GuestClassRegisterCard
            moimId={moimId ?? ''}
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
            handlePageChange={handlePageChange}
          />
        </main>
      </div>

      <footer css={depositFooterStyle}>
        <Button variant="large" onClick={handleModalOpen}>
          입금하기
        </Button>
      </footer>
    </article>
  );
};

export default ClassApplyDeposit;
