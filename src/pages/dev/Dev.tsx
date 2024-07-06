import { NumberLabel, Notice } from '@components';

const Dev = () => {
  return (
    <div>
      <div>
        <h2>NumberLabel</h2>
        <NumberLabel>1</NumberLabel>
        <NumberLabel>2</NumberLabel>
        <NumberLabel>Q1</NumberLabel>
      </div>

      <div>
        <h2>Notice</h2>
        <Notice numberLabel="1">
          모임 참여 전, 호스트가 게시하는 공지사항을 꼼꼼히 확인해주세요.
        </Notice>
        <Notice numberLabel="2">
          무단으로 불참하거나, 함께하는 이들에게 피해를 주는 경우 이용 제재를 받게 돼요.
        </Notice>
        <Notice numberLabel="3">서로에게 유익한 시간이 되도록 열정적인 태도로 임해주세요.</Notice>
      </div>
    </div>
  );
};

export default Dev;
