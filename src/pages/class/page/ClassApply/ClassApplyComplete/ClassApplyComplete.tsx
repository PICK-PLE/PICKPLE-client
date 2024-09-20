import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@components';
import { GuestClassRegisterCard } from '@pages/class/components';

import {
  completeArticleLayout,
  completeCautionStyle,
  completeCautionTitleStyle,
  completeFooterStyle,
  completeHStyle,
  completeMainStyle,
  completeSpanStyle,
  completeTextStyle,
  completeWrapperStyle,
} from './ClassApplyComplete.style';

import { MoimIdPathParameterType } from '@types';

const ClassApplyComplete = () => {
  const { moimId } = useParams<MoimIdPathParameterType>();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/class-list`);
  };
  return (
    <article css={completeArticleLayout}>
      <div css={completeWrapperStyle}>
        <header>
          <span css={completeSpanStyle}>클래스 모임 신청</span>
          <h1 css={completeHStyle}>
            모집 마감일 이후 마이페이지에서 <br />
            승인 여부를 확인할 수 있어요.
          </h1>
        </header>

        <main css={completeMainStyle}>
          <GuestClassRegisterCard moimId={moimId ?? ''} />

          <div css={completeCautionStyle}>
            <p css={completeCautionTitleStyle}>유의 사항</p>
            <ul css={completeTextStyle}>
              <li>입금 확인이 되면 '승인 대기' 상태로 전환됩니다.</li>
              <li>이후, 스픽커 승인 여부에 따라 '승인 완료' 또는 '승인 거절' 이 결정됩니다.</li>
              <li>승인이 거절될 시, 클래스 참가비는 개인 계좌로 환불됩니다.</li>
              <li>
                {
                  '승인 완료 후 클래스 신청 취소 문의는 [마이페이지] > [픽플에 문의하기]에서 가능하며, 환불 규정에 따라 처리됩니다.'
                }
              </li>
            </ul>
          </div>
        </main>
      </div>

      <footer css={completeFooterStyle}>
        <Button variant="large" onClick={handleButtonClick}>
          다른 클래스 둘러보기
        </Button>
      </footer>
    </article>
  );
};

export default ClassApplyComplete;
