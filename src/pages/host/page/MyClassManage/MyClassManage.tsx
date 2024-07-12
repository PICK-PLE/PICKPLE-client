import { ApplicantAccordionList, Button, Header, Label } from '@components';
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
import { useState, useEffect } from 'react';
import { IcHostMyclassManageEmptyView } from '@svg';

export interface ApplicantData {
  applicantId: number;
  nickname: string;
  profileImage: string;
  applicationDate: string;
}

//checkBox 로직
const MyClassManage = () => {
  const status = APPLICANT_DATA.status;
  const maxGuest = APPLICANT_DATA.data.maxGuest;
  const submitterList = APPLICANT_DATA.data.submitterList;
  const submitterListLength = APPLICANT_DATA.data.submitterList.length;

  // 통합된 데이터 생성
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(submitterListLength).fill(false) // 초기 상태를 모든 항목이 unchecked 상태로 설정
  );

  // 특정 아코디언 항목의 체크 상태를 토글
  const toggleChecked = (index: number) => {
    setCheckedStates((prevStates) =>
      prevStates.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  // checkedApplicant 배열에 체크된 applicant들을 담는 로직
  const checkedApplicant = submitterList.filter((_, index) => checkedStates[index]);
  console.log(checkedApplicant);

  // 공유버튼 로직 > share 버튼에서 그대로 가져옴!
  const url = 'https://pick-ple.com';
  const title = 'PICK!PLE';
  const text = "내가 PICK!한 바로 '그 사람'과 함께하는 클래스 모임.";

  // 버튼 색깔 변경되는 부분
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let active = true;

    // 신청자 선택 아무것도 안했을 때 false
    if (checkedApplicant.length === 0) {
      active = false;
    }

    // 신청자가 없을 때
    if (status !== 201) {
      active = false;
    }

    // 신청 마감날 이전일 때
    // if (someCondition) {
    //   active = false;
    // }

    setIsActive(active);
  }, [checkedApplicant, status]);

  const handleClickButton = () => {
    // if (isActive) {
    // }
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
            <Label variant="count">{`${checkedApplicant.length} / ${maxGuest}`}</Label>
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
          <Button variant="large" disabled={!isActive} onClick={handleClickButton}>
            승인하기
          </Button>
        </footer>
      </article>
    </div>
  );
};

export default MyClassManage;
