import { LogoHeader, ProgressBar } from "@components"
import { questionArticleLayout, questionHStyle, questionSpanStyle, questionWrapperStyle } from "@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion.style"

const ClassApplyQuestion = () => {
  return (
    <>
      <LogoHeader />
      <ProgressBar progress={50} />

      <article css={questionArticleLayout}>
        <div css={questionWrapperStyle}>
          <header>
            <span css={questionSpanStyle}>클래스 모임 신청</span>
            <h1 css={questionHStyle}>
              호스트의 질문에 <br /> 답변을 작성해 주세요!
            </h1>
          </header>
          </div>
      </article>
    </>
  )
}

export default ClassApplyQuestion

//질문 개수만큼 맵 돌려서 QuestionText, TextArea 만들기