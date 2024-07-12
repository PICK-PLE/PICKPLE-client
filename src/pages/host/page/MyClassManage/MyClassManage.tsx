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
  emptyText,
  emptyViewImageStyle,
  emptyViewButtonStyle,
  emptyViewContainer,
  emptyViewWrapper,
} from '@pages/host/page/MyClassManage/MyClassManage.style';
import { APPLICANT_DATA } from 'src/constants/mocks/applicant';
import { useState, useEffect, useMemo } from 'react';
import { IcHostMyclassManageEmptyView } from '@svg';
import { ApplicantListModal } from '@pages/host/components';
import { ApplicantListResponseType } from '@types';
import useToast from 'src/hooks/useToast';

export interface ApplicantData {
  applicantId: number;
  nickname: string;
  profileImage: string;
  applicationDate: string;
}

const MyClassManage = () => {
  const status = APPLICANT_DATA.status;
  const isExpired = APPLICANT_DATA.data.isExpired;
  const maxGuest = APPLICANT_DATA.data.maxGuest;
  const submitterList = APPLICANT_DATA.data.submitterList;
  const submitterListLength = APPLICANT_DATA.data.submitterList.length;

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

  // 공유버튼 부분 (share 버튼에서 그대로 가져옴)
  const url = 'https://pick-ple.com';
  const title = 'PICK!PLE';
  const text = "내가 PICK!한 바로 '그 사람'과 함께하는 클래스 모임.";

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
              <span css={countTextStyle}>({submitterListLength})</span>
            </div>
            <Label variant="count">{`${checkedApplicant.submitterList.length} / ${maxGuest}`}</Label>
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
              <div css={emptyViewContainer}>
                <div css={emptyViewWrapper}>
                  <div css={emptyViewImageStyle}>
                    <IcHostMyclassManageEmptyView />
                  </div>

                  <div css={emptyText}>
                    <span>아직 게스트를 기다리는 중이에요 </span>
                    <span>모임을 공유해 보세요!</span>
                  </div>
                </div>

                <div css={emptyViewButtonStyle}>
                  <Button
                    variant="round"
                    onClick={() => {
                      navigator.share({
                        url,
                        title,
                        text,
                      });
                    }}>
                    모임 공유하기
                  </Button>
                </div>
              </div>
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
