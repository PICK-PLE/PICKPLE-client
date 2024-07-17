import { Button, LogoHeader, ProgressBar } from '@components';
import { GuestClassRegisterCard } from '@pages/class/components';
import {
  classApplyCompleteLayout,
  completeArticleLayout,
  completeCautionStyle,
  completeCautionTitleStyle,
  completeFooterStyle,
  completeHStyle,
  completeMainStyle,
  completeSpanStyle,
  completeTextStyle,
  completeWrapperStyle,
} from '@pages/class/page/ClassApply/ClassApplyComplete/ClassApplyComplete.style';
import { MoimIdPathParameterType } from '@types';
import { useNavigate, useParams } from 'react-router-dom';

const ClassApplyComplete = () => {
  const navigate = useNavigate();
  const { moimId } = useParams<MoimIdPathParameterType>();
  const handleButtonClick = () => {
    navigate(`/categories`);
  };
  return (
    <div css={classApplyCompleteLayout}>
      <LogoHeader />
      <ProgressBar progress={100} />

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
            <GuestClassRegisterCard moimId={Number(moimId)}/>

            <div css={completeCautionStyle}>
              <p css={completeCautionTitleStyle}>유의 사항</p>
              <div>
                <span css={completeTextStyle}>
                  * 입금 확인이 되면 '승인 대기' 상태로 전환됩니다.
                </span>
                <span css={completeTextStyle}>
                  * 이후, 호스트 승인 여부에 따라 '승인 완료' 또는 '승인 거절' 이 결정됩니다.
                </span>
                <span css={completeTextStyle}>
                  * 승인이 거절될 시, 모임 참가비는 개인 계좌로 환불됩니다.
                </span>
                <span css={completeTextStyle}>
                  * 승인 완료 후에는 모임 신청을 취소할 수 없습니다.
                </span>
              </div>
            </div>
          </main>
        </div>

        <footer css={completeFooterStyle}>
          <Button variant="large" onClick={handleButtonClick}>
            다른 클래스 모임 둘러보기
          </Button>
        </footer>
      </article>
    </div>
  );
};

export default ClassApplyComplete;
