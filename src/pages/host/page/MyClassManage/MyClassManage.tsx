import { ApplicantAccordionList, Button, Header, Label, Modal, Toast } from '@components';
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
import { useFetchApplicantList } from '@apis/domains/moimSubmissionr/useFetchApplicantList';

const MyClassManage = () => {
  const moimId = 6;
  const { data: applicantData, isLoading } = useFetchApplicantList(moimId);
  const { showToast, isToastVisible } = useToast();
  const [isOpenModal, setIsOpenModal] = useState(false);

  // 모임 정보 추출 
  const { maxGuest, isApprovable, submitterList } = applicantData || {};

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
    const newCheckedState = !checkedStates[index];

    const checkedCount = checkedStates.filter((state) => state).length;

    if (newCheckedState && checkedCount >= (maxGuest ?? 0)) {
      showToast('최대 인원을 초과할 수 없습니다.');
      return;
    }

    if (isApprovable) {
      setCheckedStates((prevStates) =>
        prevStates.map((checked, i) => (i === index ? newCheckedState : checked))
      );
    } else {
      showToast('신청 마감일 이후에 신청자를 승인할 수 있어요.');
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header title="신청자 관리" />
      <article css={myClassManageLayout}>
        <header css={headerStyle}>
          <div>부산 10년 토박이 달아오르구마와 함께하는 사투리리</div>
        </header>

        {applicantData ? (
        <main css={mainStyle}>
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
                moimId={moimId}
                checkedStates={checkedStates}
                toggleChecked={toggleChecked}
              />
            </div>
            </main>
          ) : (
            <main css={mainStyle}>
            <div css={labelStyle}>
              <div css={textStyle}>
                <span css={countTitleStyle}>모임 신청자</span>
                <span css={countTextStyle}>0</span>
              </div>
              <Label variant="count">
                {`0 / ${maxGuest}`}
              </Label>
            </div>
            <ClassManageEmptyView />
            </main>
          )}


        <footer css={footerStyle}>
          <Button variant="large" disabled={!isActive} onClick={handleModalOpen}>
            승인하기
          </Button>
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
