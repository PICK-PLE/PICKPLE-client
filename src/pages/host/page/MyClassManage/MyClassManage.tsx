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
import { useState, useEffect, useMemo } from 'react';
import { ApplicantListModal, ClassManageEmptyView } from '@pages/host/components';
import { useToast } from '@hooks';
import { useFetchSubmitterList } from '@apis/domains/moimSubmission/useFetchSubmitterList';
import { useParams } from 'react-router-dom';
import Error from '@pages/error/Error';

const MyClassManage = () => {
  const { moimId } = useParams();
  const { data: applicantData, isLoading } = useFetchSubmitterList(Number(moimId));
  const { showToast, isToastVisible } = useToast();
  const [isOpenModal, setIsOpenModal] = useState(false);

  // 이전에 승인을 한 적이 있는지 확인. 서버에서 API 수정 후 삭제 예정
  const isApproved = false;

  // 진행중인 모임인지, 완료된 모임인지 확인. 서버에서 API 수정 후 삭제 예정
  const isCompleted = false;

  // 모임 정보 추출
  const { moimTitle, maxGuest, isApprovable, submitterList } = applicantData || {};

  // 체크박스 상태 관리
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    Array(submitterList?.length).fill(false)
  );

  useEffect(() => {
    if (applicantData) {
      setCheckedStates(new Array(submitterList?.length).fill(false));
    }
  }, [applicantData, submitterList?.length]);

  const checkedApplicant = useMemo(() => {
    return {
      maxGuest,
      isApprovable,
      submitterList: submitterList?.filter((_, index: number) => checkedStates[index]),
    };
  }, [maxGuest, isApprovable, submitterList, checkedStates]);

  const toggleChecked = (index: number) => {
    if (isApproved || isCompleted) return;

    const newCheckedState = !checkedStates[index];

    if (isApprovable) {
      setCheckedStates((prevStates) =>
        prevStates.map((checked, i) => (i === index ? newCheckedState : checked))
      );
    } else {
      showToast();
    }
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (checkedApplicant.submitterList) {
      setIsActive(checkedApplicant.submitterList.length > 0 && (isApprovable ?? true));
    }
  }, [checkedApplicant, isApprovable]);

  const handleModalOpen = () => {
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
                <Label variant="count">
                  {`${checkedApplicant.submitterList?.length} / ${maxGuest}`}
                </Label>
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
          {!isCompleted && (
            <Button variant="large" disabled={isApproved || !isActive} onClick={handleModalOpen}>
              {isApproved ? '승인 완료' : '승인하기'}
            </Button>
          )}
        </footer>

        {isOpenModal && (
          <Modal onClose={handleModalClose}>
            <ApplicantListModal applicantListData={checkedApplicant} onClose={handleModalClose} />
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
