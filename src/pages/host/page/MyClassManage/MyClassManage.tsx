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
} from '@pages/host/page/MyClassManage/MyClassManage.style';
import { APPLICANT_DATA } from 'src/constants/mocks/applicant';
import { useState } from 'react';

export interface ApplicantData {
  applicantId: number;
  nickname: string;
  profileImage: string;
  applicationDate: string;
}

//maxGuest만 사용하고 나머지 정보인 data는 ApplicantAccordion으로 보내주기
const MyClassManage = () => {
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
            <ApplicantAccordionList
              applicantData={submitterList}
              moimId={1}
              checkedStates={checkedStates}
              toggleChecked={toggleChecked}
            />
          </div>
        </main>

        <footer css={footerStyle}>
          <Button variant="large">승인하기</Button>
        </footer>
      </article>
    </div>
  );
};

export default MyClassManage;
