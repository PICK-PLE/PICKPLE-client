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
  questionStyle,
  answerStyle,
} from 'src/components/common/applicantAccordions/ApplicantAccordion/ApplicantAccordion.style';

export interface ApplicantAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  moimId: number;
  guestId: number;
  applicantName: string;
  applicantImg: string;
  applyDate: string;
  questions: { question: string; answer: string }[];
  isChecked: boolean;
  toggleChecked: () => void;
}

const ApplicantAccordion = ({
  applicantName,
  applicantImg,
  applyDate,
  questions,
  isChecked,
  moimId,
  guestId,
  toggleChecked,
}: ApplicantAccordionProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccodionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const defaultImgUrl = 'svg/ic_default-userimg.svg';

  //삭제예정 시비 ㄴㄴ
  console.log(moimId, guestId);

  return (
    <div css={applicantAccordionLayout}>
      <div css={applicantLayoutStyle}>
        {/* 프로필 카드 */}
        <div css={applicantContainerStyle}>
          <label css={customCheckboxStyle}>
            {isChecked ? <IcCheckActive /> : <IcCheckDefault />}
            <input
              type="checkbox"
              css={checkboxStyle}
              checked={isChecked}
              onChange={toggleChecked}
            />
          </label>
          <div css={applicantWrapperStyle}>
            {/* 신청자 프로필: 이미지 + 이름 + 날짜 */}
            <img
              src={applicantImg || defaultImgUrl}
              alt={`${applicantName}의 이미지`}
              css={applicnatImgStyle}
            />
            <div css={applicantInfoStyle}>
              <span css={applicantNameStyle}>{applicantName}</span>
              <span css={applyDateStyle}>{applyDate}</span>
            </div>
          </div>
        </div>
        <button css={accodionButtonStyle} onClick={handleAccodionClick}>
          <IcApplicantArrcodionDown css={accodionStyle(isAccordionOpen)} />
        </button>
      </div>

      {/* 아코디언 열렸을 때 보이는 부분 */}
      {isAccordionOpen && (
        <div css={accdionContentWrapperStyle}>
          {questions.map((applicant, index) => (
            // TODO: 추후 id값으로 key 변경 예정
            <div key={index} css={accdionContentStyle}>
              <div css={questionStyle}>{applicant.question}</div>
              <div css={answerStyle}>{applicant.answer}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicantAccordion;
