import {
  emptyText,
  emptyViewButtonStyle,
  emptyViewContainer,
  emptyViewImageStyle,
  emptyViewWrapper,
} from './ClassManageEmptyView.style';
import { Button } from '@components';
import { graphicImage } from '@constants';

const ClassManageEmptyView = () => {
  // 공유버튼 부분 예시
  const url = 'https://pick-ple.com';
  const title = 'PICK!PLE';
  const text = "내가 PICK!한 바로 '그 사람'과 함께하는 클래스 모임.";

  return (
    <div css={emptyViewContainer}>
      <div css={emptyViewWrapper}>
        <div css={emptyViewImageStyle}>
          {/* TODO: 그래픽 이미지 수정 */}
          <img src={graphicImage.GuestImage} alt="" />
          {/* <IcHostMyclassManageEmptyView /> */}
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
  );
};

export default ClassManageEmptyView;
