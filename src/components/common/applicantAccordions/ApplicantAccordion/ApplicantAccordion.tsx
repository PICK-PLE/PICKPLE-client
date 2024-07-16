import { useState, useEffect } from 'react';
import { IcApplicantArrcodionDown, IcCheckActive, IcCheckDefault } from '@svg';
import {
  applicantAccordionLayout,
  applicantLayoutStyle,
  applicantContainerStyle,
  checkboxStyle,
  customCheckboxStyle,
  applicantWrapperStyle,
  applicnatImgStyle,
  applicantInfoStyle,
  applicantNameStyle,
  applyDateStyle,
  accodionStyle,
  accodionButtonStyle,
  accdionContentWrapperStyle,
  accdionContentStyle,
  answerStyle,
} from './ApplicantAccordion.style';

import { Image, QuestionText } from '@components';
import { useFetchSubmitRequest } from '@apis/domains/moimSubmissionr/useFetchSubmitRequest';
import { components } from '@schema';

interface ApplicantAccordionProps {
  moimId: number;
  applicantData: components['schemas']['SubmitterInfo'];
  isChecked: boolean;
  toggleChecked: () => void;
}

type QuestionAnswerPair = {
  question: string | undefined;
  answer: string | undefined;
};

const ApplicantAccordion = ({
  applicantData,
  isChecked,
  moimId,
  toggleChecked,
}: ApplicantAccordionProps) => {
  const {
    submitterId = 1,
    nickname = '',
    submitterImageUrl = '',
    submittedDate = '',
  } = applicantData;

  const { data: submitRequest, refetch } = useFetchSubmitRequest({ moimId, submitterId });
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [submitRequestList, setSubmitRequestList] = useState<QuestionAnswerPair[]>([]);

  // submitterId가 변경될 때마다 refetch 호출
  useEffect(() => {
    if (submitterId !== null) {
      refetch();
    }
  }, [submitterId, refetch]);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
    if (!isAccordionOpen) {
      refetch(); // 아코디언이 열릴 때 API 호출
    }
  };

  useEffect(() => {
    if (submitRequest) {
      const questions = {
        question1: '',
        question2: '',
        question3: '',
      };

      const answers = {
        answer1: '',
        answer2: '',
        answer3: '',
      };
      const { questionList = questions, answerList = answers } = submitRequest;
      const questionAnswerPairs: QuestionAnswerPair[] = Object.keys(questionList).map((key) => {
        const questionKey = key as keyof typeof questionList;
        const answerKey = `answer${key.slice(-1)}` as keyof typeof answerList;

        return {
          question: questionList[questionKey],
          answer: answerList[answerKey] || '',
        };
      });
      setSubmitRequestList(questionAnswerPairs);
    }
  }, [submitRequest]);

  const defaultImgUrl = 'svg/ic_default-userimg.svg';

  return (
    <div css={applicantAccordionLayout}>
      <div css={applicantLayoutStyle}>
        <div css={applicantContainerStyle}>
          {/* 체크박스 */}
          <label css={customCheckboxStyle}>
            {isChecked ? <IcCheckActive /> : <IcCheckDefault />}
            <input
              type="checkbox"
              css={checkboxStyle}
              checked={isChecked ?? false}
              onChange={toggleChecked}
            />
          </label>

          {/* 신청자 프로필: 이미지 + 이름 + 날짜 */}
          <div css={applicantWrapperStyle}>
            <Image
              variant="round"
              width="4.8rem"
              src={submitterImageUrl || defaultImgUrl}
              css={applicnatImgStyle}
            />

            <div css={applicantInfoStyle}>
              <span css={applicantNameStyle}>{nickname}</span>
              <span css={applyDateStyle}>{submittedDate}</span>
            </div>
          </div>
        </div>

        {/* 아코디언 버튼 */}
        <button css={accodionButtonStyle} onClick={handleAccordionClick}>
          <IcApplicantArrcodionDown css={accodionStyle(isAccordionOpen)} />
        </button>
      </div>

      {/* 아코디언 열렸을 때 보이는 부분 */}
      {isAccordionOpen && (
        <div css={accdionContentWrapperStyle}>
          {submitRequestList.map((item, index) => {
            const { question, answer } = item;
            return (
              question &&
              answer && (
                <div key={index} css={accdionContentStyle}>
                  <QuestionText numberLabel={`Q${index + 1}`}>{question}</QuestionText>
                  <div css={answerStyle}>{answer}</div>
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ApplicantAccordion;
