import { ApplicantAccordionList, Button, Header, Label, Modal, Spinner, Toast } from '@components';
import {
  myClassManageLayout,
  headerStyle,
  labelStyle,
  mainStyle,
  footerStyle,
  countTextStyle,
  textStyle,
  countTitleStyle,
  accordionStyle,
} from './MyClassManage.style';
import { useState, useEffect } from 'react';
import { ApplicantListModal, ClassManageEmptyView } from '@pages/host/components';
import { useToast } from '@hooks';
import { useFetchSubmitterList } from '@apis/domains/moimSubmission/useFetchSubmitterList';
import { useParams } from 'react-router-dom';
import Error from '@pages/error/Error';
import { components } from '@schema';
type SubmitterInfo = components['schemas']['SubmitterInfo'];

const MyClassManage = () => {
  const { moimId } = useParams();
  const { data: applicantData, isLoading } = useFetchSubmitterList(Number(moimId));
  const { showToast, isToastVisible } = useToast();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isActive, setIsActive] = useState(false);

  // 모임 정보 추출
  const { moimTitle, maxGuest, isApprovable, submitterList, isOngoing, isMoimSubmissionApproved } =
    applicantData || {};

  // 체크박스 상태 관리
  const [checkedStates, setCheckedStates] = useState<boolean[]>([]);
  const [checkedSubmitter, setCheckedSubmitter] = useState<SubmitterInfo[]>([]);

  //check하는 과정
  const toggleChecked = (index: number) => {
    // isOngoing = false / isMoimSubmissionApproved = true 일 때 체크 불가능
    if (!isOngoing || isMoimSubmissionApproved) return;

    // isApprovable = false 일 때 체크 불가능 + 토스트 띄우기
    if (!isApprovable) {
      showToast();
      return;
    }

    setCheckedStates((prev) =>
      prev.map((checkedState, checkedStateIndex) => {
        if (index === checkedStateIndex) {
          checkedState = !checkedState;
        }
        return checkedState;
      })
    );
  };

  // 체크상태 바로 반영이 되게
  useEffect(() => {
    if (submitterList && checkedStates.length === 0) {
      setCheckedStates(Array(submitterList?.length).fill(false));
    }
  }, [checkedStates, submitterList]);

  // 체크 상태 [false, false, true] 이런 식으로 되어있음
  console.log('checkedStates', checkedStates);

  // 체크된 사람들의 상태
  console.log('checkedSubmitter', checkedSubmitter);

  // 하나라도 체크가 되면, 버튼 활성화 + 안눌리면 비활성화
  // checkedSubmitter가 변경될 때마다 반영되어야 하니까 useEffect 사용
  useEffect(() => {
    if (checkedSubmitter && checkedSubmitter.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [checkedSubmitter]);

  // 완료된 모임이거나 신청을 이미 받은 모임이라면 => checkedSubmitter에 해당하는 사람들 체크 active 해두기
  // 맵 돌아아ㅑ 할 듯

  if (isMoimSubmissionApproved || !isOngoing) {
    submitterList?.map((submitter, index) => {
      if (submitter.state == 'approved') {
        checkedStates[index] = true;
      }
    });
  }


  useEffect(() => {
    if (submitterList) {
      const newArray: SubmitterInfo[] = [];
      checkedStates.map((checkedState, checkedStateIndex) => {
        if (checkedState) {
          newArray.push(submitterList[checkedStateIndex]);
        }
      });
      setCheckedSubmitter(newArray);
    }
  }, [checkedStates, submitterList]);

  const handleButtonClick = () => {
    // 체크가 되면 -> 체크된 아이의 정보를 담아놔야 함!! >> 배열로

    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!applicantData) {
    return <Error />;
  }

  return (
    <div>
      <Header title="신청자 관리" />
      <article css={myClassManageLayout}>
        <header css={headerStyle}>
          <p>{moimTitle}</p>
        </header>

        <main css={mainStyle}>
          {submitterList && submitterList?.length > 0 ? (
            <>
              <div css={labelStyle}>
                <div css={textStyle}>
                  <span css={countTitleStyle}>모임 신청자</span>
                  <span css={countTextStyle}>{submitterList?.length}</span>
                </div>
                <Label variant="count">{`${checkedSubmitter?.length} / ${maxGuest}`}</Label>
              </div>

              <div css={accordionStyle}>
                <ApplicantAccordionList
                  applicantData={submitterList ?? []}
                  moimId={Number(moimId)}
                  checkedStates={checkedStates}
                  toggleChecked={toggleChecked}
                />
              </div>
            </>
          ) : (
            <ClassManageEmptyView moimId={Number(moimId)} maxGuest={maxGuest ?? 0} />
          )}
        </main>

        <footer css={footerStyle}>
          {isOngoing && (
            <Button
              variant="large"
              disabled={!isApprovable || isMoimSubmissionApproved || !isActive}
              onClick={handleButtonClick}>
              {isMoimSubmissionApproved ? '승인 완료' : '승인하기'}
            </Button>
          )}
        </footer>

        {isOpenModal && (
          <Modal onClose={handleModalClose}>
            <ApplicantListModal
              submitterList={checkedSubmitter}
              onClose={handleModalClose}
              moimId={Number(moimId)}
            />
          </Modal>
        )}

        {isToastVisible && (
          <Toast isVisible={isToastVisible} toastBottom={10} toastIcon={true}>
            신청 마감일 이후에 신청자를 승인할 수 있어요.
          </Toast>
        )}
      </article>
    </div>
  );
};

export default MyClassManage;
