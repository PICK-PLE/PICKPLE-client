import { ApplicantAccordionList, Button, Header, Label, Modal, Toast } from '@components';
import {
  articleLayout,
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
import { ApplicantListResponseType } from '@types';
import { useToast } from '@hooks';

import { APPLICANT_DATA } from 'src/constants/mocks/applicant';

const MyClassManage = () => {
  const { status, data } = APPLICANT_DATA;
  const { isExpired, maxGuest, submitterList } = data;
  const submitterListLength = submitterList.length;

  //checkBox 부분
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(submitterListLength).fill(false) // 초기 상태를 모든 항목이 unchecked 상태로 설정
  );

  const { showToast, isToastVisible } = useToast();

  const toggleChecked = (index: number) => {
    if (isExpired) {
      setCheckedStates((prevStates) =>
        prevStates.map((checked, i) => (i === index ? !checked : checked))
      );
    } else {
      showToast(''); //Toast에 문제가 있어보이는데 ...
    }
  };

  const checkedApplicant: ApplicantListResponseType = useMemo(
    () => ({
      maxGuest: maxGuest,
      submitterList: submitterList.filter((_, index) => checkedStates[index]),
    }),
    [maxGuest, submitterList, checkedStates]
  );

  // 버튼 active 상태
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let active = true;

    // 신청자 선택 아무것도 안했을 때
    if (checkedApplicant.submitterList.length === 0) {
      active = false;
    }

    // 신청자가 없을 때
    if (status !== 201) {
      active = false;
    }

    // 신청 마감날 이전일 때
    if (isExpired === false) {
      active = false;
    }

    setIsActive(active);
  }, [checkedApplicant, status, isExpired]);

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

      <article css={articleLayout}>
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
            {/* 나중에 에러코드 명확하게 나오면 수정예정!!!! */}
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
