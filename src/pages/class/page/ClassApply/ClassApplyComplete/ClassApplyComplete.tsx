import { LogoHeader, ProgressBar } from "@components"
import { completeArticleLayout, completeHStyle, completeSpanStyle, completeWrapperStyle } from "@pages/class/page/ClassApply/ClassApplyComplete/ClassApplyComplete.style"

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
              모임 신청이 완료되었습니다! <br /> 이제 참가비를 입금해주세요.
            </h1>
          </header>
          </div>
      </article>
    </>
  )
}

export default ClassApplyComplete