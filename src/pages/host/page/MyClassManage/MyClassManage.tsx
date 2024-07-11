import { ApplicantAccordionList, Button, Header, Label } from "@components";

const MyClassManage = () => {
  return(<div style={{margin: "0 2rem"}}>
    <Header title="신청자 관리" />
    <div>부산 10년 토박이 달아오르구마와 함께하는 사투리리</div>
    <div>
      <span>모임 신청자 (12)</span>
      <Label variant="count">2</Label>
    </div>
    <ApplicantAccordionList moimId={1} />
    <Button variant="large">승인하기</Button>
  </div>);
};

export default MyClassManage;
