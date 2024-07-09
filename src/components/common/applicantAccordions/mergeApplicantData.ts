import {
  APPLICANT_DATA,
  APPLICANT_ANSWER_LIST,
} from 'src/components/common/applicantAccordions/applicant';

// 통합된 데이터 타입 정의 (TypeScript)
interface ApplicantData {
  applicantId: number;
  nickname: string;
  profileImage: string;
  applicationDate: string;
  questions: { question: string; answer: string }[];
}

// 신청자와 질문/답변을 매핑하는 함수
export const mergeApplicantData = (
  applicants: typeof APPLICANT_DATA,
  answers: typeof APPLICANT_ANSWER_LIST
): ApplicantData[] => {
  return applicants.map((applicant) => {
    const answerData = answers.find((answer) => answer.applicantId === applicant.applicantId);

    // 질문과 답변 병합
    const questions = answerData
      ? answerData.questionList.map((questionObj, index) => ({
          question: Object.values(questionObj)[0], // 질문 내용
          answer: answerData.answerList[index]
            ? Object.values(answerData.answerList[index])[0]
            : '', // 답변 내용
        }))
      : [];

    console.log('applicant', applicant);
    console.log('questions', questions);

    return {
      ...applicant,
      questions,
    };
  });
};
