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
import { ApplicantListType, useFetchApplicantList } from '@apis/domains/moimSubmissionr/useFetchApplicantList';

const MyClassManage = () => {
  // TODO: 커스텀 훅으로 분리
  const { data: applicantData, status } = useFetchApplicantList(1);
  console.log(applicantData);

  // 초기 상태를 설정
  const isApprovable = applicantData?.data.isApprovable ?? false;
  const maxGuest = applicantData?.data.maxGuest ?? 0;
  const submitterList = applicantData?.data.submitterList ?? [];
  const submitterListLength = submitterList.length;

  //checkBox 부분
  const [checkedStates, setCheckedStates] = useState<boolean[]>(new Array(submitterListLength).fill(false)); // 초기 상태를 모든 항목이 unchecked 상태로 설정

  const { showToast, isToastVisible } = useToast();

  const checkedApplicant: ApplicantListType['data'] = useMemo(
    () => ({
      maxGuest: maxGuest,
      isApprovable: isApprovable,
      submitterList: submitterList.filter((_, index) => checkedStates[index]),
    }),
    [maxGuest, isApprovable, submitterList, checkedStates]
  );

  const toggleChecked = (index: number) => {
    if (checkedApplicant.submitterList.length >= maxGuest && !checkedStates[index]) return;
    if (isApprovable) {
      setCheckedStates((prevStates) =>
        prevStates.map((checked, i) => (i === index ? !checked : checked))
      );
    } else {
      showToast('');
    }
  };

  // 버튼 active 상태
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (checkedApplicant.submitterList.length > 0 && isApprovable) {
      setIsActive(true);
    }
  }, [checkedApplicant, isApprovable]);

  // 모달 부분
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Header title="신청자 관리" />
      <article css={myClassManageLayout}>
        <header css={headerStyle}>
          <div>부산 10년 토박이 달아오르구마와 함께하는 사투리리</div>
        </header>

        <main css={mainStyle}>
          <div css={labelStyle}>
            <div css={textStyle}>
              <span css={countTitleStyle}>모임 신청자</span>
              <span css={countTextStyle}>{status === 201 ? submitterListLength : '0'}</span>
            </div>
            <Label variant="count">
              {status === 201
                ? `${checkedApplicant.submitterList.length} / ${maxGuest}`
                : `0  / ${maxGuest}`}
            </Label>
          </div>

          <div css={accordionStyle}>
            {status === 201 ? (
              <ApplicantAccordionList
                applicantData={submitterList}
                moimId={1}
                checkedStates={checkedStates}
                toggleChecked={toggleChecked}
              />
            ) : (
              <ClassManageEmptyView />
            )}
          </div>
        </main>

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

