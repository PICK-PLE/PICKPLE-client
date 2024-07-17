import {
  countTextStyle,
  countTitleStyle,
  emptyText,
  emptyViewButtonStyle,
  emptyViewContainer,
  emptyViewImageStyle,
  emptyViewWrapper,
  labelStyle,
  textStyle,
} from './ClassManageEmptyView.style';
import { Button, Label } from '@components';
import { graphicImage } from '@constants';
import { useClipboard } from '@hooks';
import { handleShare } from '@utils';

interface ClassManageEmptyViewProps {
  moimId: number;
  maxGuest: number;
}

const ClassManageEmptyView = ({ moimId , maxGuest}: ClassManageEmptyViewProps) => {
  const { handleCopyToClipboard } = useClipboard();

  // 공유버튼 부분 예시
  const url = `https://pick-ple.com/class/${moimId}`;
  const title = 'PICK!PLE';
  const text = "내가 PICK!한 바로 '그 사람'과 함께하는 클래스 모임.";

  return (
    <>
      <div css={labelStyle}>
        <div css={textStyle}>
          <span css={countTitleStyle}>모임 신청자</span>
          <span css={countTextStyle}>0</span>
        </div>
        <Label variant="count">{`0 / ${maxGuest}`}</Label>
      </div>
      <div css={emptyViewContainer}>
        <div css={emptyViewWrapper}>
          <img
            src={graphicImage.GuestImage}
            alt="게스트를 기다리는 중이에요"
            css={emptyViewImageStyle}
          />

          <div css={emptyText}>
            <span>아직 게스트를 기다리는 중이에요 </span>
            <span>모임을 공유해 보세요!</span>
          </div>
        </div>

        <div css={emptyViewButtonStyle}>
          <Button
            variant="round"
            onClick={() => {
              handleShare(url, title, text, handleCopyToClipboard);
            }}>
            모임 공유하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default ClassManageEmptyView;
