import {
  Button,
  LogoHeader,
  ProgressBar,
  QuestionText,
  TextArea,
  Input,
  Spinner,
} from '@components';
import {
  classApplyQuestionLayout,
  headerStyle,
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
} from './ClassApplyQuestion.style';
import { IcCaution } from '@svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchQuestionList } from '@apis/domains/moim/useFetchQuestionList';
import { usePostAnswerList } from '@apis/domains/moimSubmission/usePostAnswerList';
import { MoimIdPathParameterType } from '@types';
import AccountNumberInput from 'src/components/common/inputs/AccountNumberInput/AccountNumberInput';
import { Error } from '@pages/error';

type AnswerListType = {
  [key: string]: string;
};

export interface DataType {
  answerList: AnswerListType;
  accountList: {
    holder: string;
    bank: string;
    accountNumber: string;
  };
}

const ClassApplyQuestion = () => {
  const { moimId } = useParams<MoimIdPathParameterType>();

  const [questionList, setQuestionList] = useState<string[]>([]);
  const { data: questionData, isSuccess, isLoading } = useFetchQuestionList(Number(moimId));
  const [answer, setAnswer] = useState<DataType>({
    answerList: {
      answer1: '',
      answer2: '',
      answer3: '',
    },
    accountList: {
      holder: '',
      bank: '',
      accountNumber: '',
    },
  });

  const { mutate } = usePostAnswerList(moimId ?? '');

  useEffect(() => {
    if (isSuccess && questionData) {
      setQuestionList(
        Object.values(questionData).filter((question) => question !== '' && question !== null)
      );
    }
  }, [isSuccess, questionData]);

  // answerList의 값을 업데이트하는 함수
  const updateAnswerList = (key: string, value: string) => {
    setAnswer((prevState) => ({
      ...prevState,
      answerList: {
        ...prevState.answerList,
        [key]: value,
      },
    }));
  };

  // accountList의 값을 업데이트하는 함수
  const updateAccountList = (key: string, value: string) => {
    setAnswer((prevState) => ({
      ...prevState,
      accountList: {
        ...prevState.accountList,
        [key]: value,
      },
    }));
  };

  const validateLength = (value: string) => {
    return value.trim().length >= 1;
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { answerList, accountList } = answer;
    const allAnswersFilled = questionList.every(
      (_, index) => answerList[`answer${index + 1}`].trim() !== ''
    );
    const allAccountsFilled = Object.values(accountList).every((value) => value.trim() !== '');
    setIsButtonDisabled(!(allAnswersFilled && allAccountsFilled));
  }, [answer, questionList]);

  const requestData = {
    moimId: Number(moimId),
    body: answer,
  };

  const handleButtonClick = () => {
    mutate(requestData);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!questionData) {
    return <Error />;
  }

  return (
    <>
      <LogoHeader />
      <div css={classApplyQuestionLayout}>
        <ProgressBar progress={50} />

        <article css={questionArticleLayout}>
          <div css={questionWrapperStyle}>
            <header css={headerStyle}>
              <span css={questionSpanStyle}>클래스 모임 신청</span>
              <h1 css={questionHStyle}>
                호스트의 질문에 <br /> 답변을 작성해 주세요!
              </h1>
            </header>

            <main css={questionMainStyle}>
              {questionList.map((question, index) => (
                <div css={questionDataStyle} key={`question-${index}`}>
                  {question && (
                    <>
                      <QuestionText numberLabel={`Q${index + 1}`}>{question}</QuestionText>
                      <TextArea
                        value={answer.answerList[`answer${index + 1}`]}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          updateAnswerList(`answer${index + 1}`, e.target.value)
                        }
                        maxLength={200}
                        size="medium"
                        placeholder="답변을 작성해주세요."
                        isValid={validateLength(answer.answerList[`answer${index + 1}`])}
                        errorMessage="빈칸을 입력해 주세요."
                      />
                    </>
                  )}
                </div>
              ))}

              <div css={questionCautionStyle}>
                <IcCaution css={questionCautionIconStyle} />

                <span css={questionCautionTextStyle}>
                  전화번호, 카카오톡 아이디 등 과도한 개인 정보를 요구하는 경우 가이드 위반
                  모임이므로 픽플에게 신고해 주세요.
                </span>
              </div>

              <div css={questionDataStyle}>
                <QuestionText numberLabel={`Q${questionList.length + 1}`}>
                  승인 거절 시 환불 받을 계좌를 알려주세요
                </QuestionText>
                <Input
                  inputLabel="예금주"
                  placeholder="ex. 홍길동"
                  isValid={true}
                  isCountValue={false}
                  value={answer.accountList.holder}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateAccountList('holder', e.target.value)
                  }
                />
                <Input
                  inputLabel="입금 은행"
                  placeholder="은행명을 입력해주세요."
                  isValid={true}
                  isCountValue={false}
                  value={answer.accountList.bank}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateAccountList('bank', e.target.value)
                  }
                />
                <AccountNumberInput
                  value={answer.accountList.accountNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateAccountList('accountNumber', e.target.value)
                  }
                />
                <span css={questionRefundTextStyle}>
                  * 환불 처리를 위해 계좌 정보를 수집, 이용하며 <br />
                  입력하신 정보는 환불 목적으로만 이용됩니다.
                </span>
              </div>
            </main>
          </div>

          <footer css={questionFooterStyle}>
            <Button variant="large" onClick={handleButtonClick} disabled={isButtonDisabled}>
              신청하기
            </Button>
          </footer>
        </article>
      </div>
    </>
  );
};

export default ClassApplyQuestion;
