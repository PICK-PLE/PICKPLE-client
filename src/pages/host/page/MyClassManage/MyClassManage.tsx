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


//   "appllicantData: {
//       "maxGuest": 15,
//       "isApprovable": false,

//       "submitterList": [

//       {
//         "submitterId": 9,
//         "nickname": "장정안#9",
//         "submitterImageUrl": "testImage",
//         "submittedDate": "2024.07.15 17:04:08"
//       },
// 	     {
//         "submitterId": 9,
//         "nickname": "장정안#9",
//         "submitterImageUrl": "testImage",
//         "submittedDate": "2024.07.15 17:04:08"
//       },
// 	     {
//         "submitterId": 9,
//         "nickname": "장정안#9",
//         "submitterImageUrl": "testImage",
//         "submittedDate": "2024.07.15 17:04:08"
//       }
//    ]
//   }


const MyClassManage = () => {
  const moimId = 8;
  const { data: applicantData } = useFetchApplicantList(moimId);
  const { showToast, isToastVisible } = useToast();
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(applicantData);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!applicantData || applicantData.submitterList.length) {
  //   return <ClassManageEmptyView />;
  // }

    // 모임 정보 추출
    const { maxGuest, isApprovable, submitterList } = applicantData;

    // 체크박스 상태 관리
    const [checkedStates, setCheckedStates] = useState(new Array(submitterList.length).fill(false));

    const checkedApplicant = useMemo(() => {
      return {
        maxGuest,
        isApprovable,
        submitterList: submitterList.filter((index: number) => checkedStates[index]),
      };
    }, [maxGuest, isApprovable, submitterList, checkedStates]);
  
    const toggleChecked = (index: number) => {
      if (checkedApplicant.submitterList.length >= maxGuest && !checkedStates[index]) return;
      if (isApprovable) {
        setCheckedStates(prevStates =>
          prevStates.map((checked, i) => (i === index ? !checked : checked))
        );
      } else {
        showToast('신청 마감일 이후에 신청자를 승인할 수 있어요.');
      }
    };

    const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(submitterList.length > 0 && isApprovable);
  }, [submitterList, isApprovable]);  


  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  }

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
              <span css={countTextStyle}>{submitterList.length}</span>
            </div>
            <Label variant="count">
              {`${checkedApplicant.submitterList.length} / ${maxGuest}`}
            </Label>
          </div>

          <div css={accordionStyle}>
            <ApplicantAccordionList
              applicantData={submitterList}
              moimId={moimId}
              checkedStates={checkedStates}
              toggleChecked={toggleChecked}
            />
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
