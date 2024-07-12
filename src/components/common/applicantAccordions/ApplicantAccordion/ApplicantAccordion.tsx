import { useState } from 'react';
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
} from 'src/components/common/applicantAccordions/ApplicantAccordion/ApplicantAccordion.style';
import QuestionText from 'src/components/common/QuestionText/QuestionText';
import Image from 'src/components/common/Image/Image';

import { APPLICANT_ANSWER_1 } from 'src/constants/mocks/applicant';
import { ApplicantData } from '@pages/host/page/MyClassManage/MyClassManage';

interface ApplicantAccordionProps {
  moimId: number;
  guestId: number;
  applicantData: ApplicantData;
  isChecked: boolean;
  toggleChecked: () => void;
}

const ApplicantAccordion = ({
  applicantData,
  isChecked,
  moimId,
  guestId,
  toggleChecked,
}: ApplicantAccordionProps) => {
  const { nickname, profileImage, applicationDate } = applicantData;

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const questionObject = APPLICANT_ANSWER_1;

  const questionList = Object.keys(questionObject.questionList).map((key) => {
    const questionKey = key as keyof typeof questionObject.questionList;
    const answerKey = `answer${key.slice(-1)}` as keyof typeof questionObject.answerList;

    return {
      question: questionObject.questionList[questionKey],
      answer: questionObject.answerList[answerKey],
    };
  });

  const handleAccodionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const defaultImgUrl = 'svg/ic_default-userimg.svg';

  //삭제예정 시비 ㄴㄴ
  console.log(moimId, guestId, applicantData);

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
              checked={isChecked}
              onChange={toggleChecked}
            />
          </label>

          {/* 신청자 프로필: 이미지 + 이름 + 날짜 */}
          <div css={applicantWrapperStyle}>
            <Image
              variant="round"
              width="4.8rem"
              src={profileImage || defaultImgUrl}
              css={applicnatImgStyle}
            />

            <div css={applicantInfoStyle}>
              <span css={applicantNameStyle}>{nickname}</span>
              <span css={applyDateStyle}>{applicationDate}</span>
            </div>
          </div>
        </div>

        {/* 아코디언 버튼 */}
        <button css={accodionButtonStyle} onClick={handleAccodionClick}>
          <IcApplicantArrcodionDown css={accodionStyle(isAccordionOpen)} />
        </button>
      </div>

      {/* 아코디언 열렸을 때 보이는 부분 */}
      {isAccordionOpen && (
        <div css={accdionContentWrapperStyle}>
          {questionList.map((item, index) => {
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
