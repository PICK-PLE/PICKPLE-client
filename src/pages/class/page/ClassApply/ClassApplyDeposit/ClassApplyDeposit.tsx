import { LogoHeader, ProgressBar } from "@components"
import { depositArticleLayout, depositHStyle, depositSpanStyle, dipositWrapperStyle } from "@pages/class/page/ClassApply/ClassApplyDeposit/ClassApplyDeposit.style"


const ClassApplyDeposit = () => {
    return (
        <>
          <LogoHeader />
          <ProgressBar progress={75} />
    
          <article css={depositArticleLayout}>
            <div css={dipositWrapperStyle}>
              <header>
                <span css={depositSpanStyle}>클래스 모임 신청</span>
                <h1 css={depositHStyle}>
                  모임 신청이 완료되었습니다! <br /> 이제 참가비를 입금해주세요.
                </h1>
              </header>
              </div>
          </article>
        </>
      )
    }

export default ClassApplyDeposit