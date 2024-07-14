import { Button, LogoHeader, ProgressBar, QuestionText, TextArea, Input } from '@components';
import {
  questionArticleLayout,
  questionCautionIconStyle,
  questionCautionStyle,
  questionCautionTextStyle,
  questionDataStyle,
  questionFooterStyle,
  questionHStyle,
  questionMainStyle,
  questionRefundTextStyle,
  questionSpanStyle,
  questionWrapperStyle,
} from '@pages/class/page/ClassApply/ClassApplyQuestion/ClassApplyQuestion.style';
import { IcCaution } from '@svg';
import { useState } from 'react';
import { classApplyQuestionData } from 'src/constants/mocks/classApplyQuestionData';
import { useEasyNavigate } from '@hooks';

const ClassApplyQuestion = () => {
  // 객체를 배열로 변환
  const questionData = Object.values(classApplyQuestionData.data);
  const [value, setValue] = useState('');
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { goClassApplyDeposit } = useEasyNavigate();

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

          <main css={questionMainStyle}>
            {questionData.map((question, index) => (
              <div css={questionDataStyle}>
                <QuestionText numberLabel={`Q${index + 1}`}>{question}</QuestionText>
                <TextArea
                  value={value}
                  onChange={handleTextAreaChange}
                  maxLength={200}
                  size="medium"
                  placeholder="답변을 작성해주세요."
                />
              </div>
            ))}

            <div css={questionCautionStyle}>
              <IcCaution css={questionCautionIconStyle} />

              <span css={questionCautionTextStyle}>
                전화번호, 카카오톡 아이디 등 과도한 개인 정보를 요구하는 경우 가이드 위반 모임이므로
                픽플에게 신고해 주세요.
              </span>
            </div>

            <div css={questionDataStyle}>
              <QuestionText numberLabel={`Q${questionData.length + 1}`}>
                승인 거절 시 환불 받을 계좌를 알려주세요
              </QuestionText>
              <Input
                inputLabel="예금주"
                placeholder="ex. 홍길동"
                isCountValue={false}
                value={value}
                onChange={handleInputChange}
              />
              <Input
                inputLabel="입금 은행"
                placeholder="은행명을 입력해주세요."
                isCountValue={false}
                value={value}
                onChange={handleInputChange}
              />
              <Input
                inputLabel="계좌 번호"
                placeholder="‘-’ 없이 입력"
                isCountValue={false}
                value={value}
                onChange={handleInputChange}
              />
              <span css={questionRefundTextStyle}>
                * 환불 처리를 위해 계좌 정보를 수집, 이용하며 <br />
                입력하신 정보는 환불 목적으로만 이용됩니다.
              </span>
            </div>
          </main>
        </div>

        <footer css={questionFooterStyle}>
          <Button variant="large" onClick={goClassApplyDeposit}>신청하기</Button>
        </footer>
      </article>
    </>
  );
};

export default ClassApplyQuestion;