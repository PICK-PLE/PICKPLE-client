import { LogoHeader, ProgressBar } from '@components';
import {
  completeArticleLayout,
  completeHStyle,
  completeSpanStyle,
  completeWrapperStyle,
} from '@pages/class/page/ClassApply/ClassApplyComplete/ClassApplyComplete.style';

const ClassApplyComplete = () => {
  return (
    <>
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
        </div>
      </article>
    </>
  );
};

export default ClassApplyComplete;
