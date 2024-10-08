import { Button, Label, Toast } from '@components';
import { graphicImage } from '@constants';
import { useClipboard, useToast } from '@hooks';
import { handleShare } from '@utils';

import {
  countTextStyle,
  countTitleStyle,
  emptyText,
  emptyViewButtonStyle,
  emptyViewContainer,
  emptyViewImageStyle,
  emptyViewLayout,
  emptyViewWrapper,
  labelStyle,
  maxGuestStyle,
  selectedTextStyle,
  textStyle,
} from './ClassManageEmptyView.style';

interface ClassManageEmptyViewProps {
  moimId: number;
  maxGuest: number;
}

const ClassManageEmptyView = ({ moimId, maxGuest }: ClassManageEmptyViewProps) => {
  const { handleCopyToClipboard } = useClipboard();
  const { showToast, isToastVisible } = useToast();

  const url = `https://pick-ple.com/class/${moimId}`;
  const title = 'PICK!PLE';
  const text = "내가 PICK!한 바로 '그 사람'과 함께하는 클래스 모임.";

  const handleButtonClick = async () => {
    const shareSuccess = await handleShare(url, title, text, handleCopyToClipboard);
    if (!shareSuccess) {
      showToast();
    }
  };

  return (
    <>
      <div css={labelStyle}>
        <div css={textStyle}>
          <span css={countTitleStyle}>클래스 신청자</span>
          <span css={countTextStyle}>0</span>
        </div>
        <Label variant="count">
          <p css={selectedTextStyle}>0</p>
          <p css={maxGuestStyle}>{` / ${maxGuest}`}</p>
        </Label>
      </div>

      <div css={emptyViewLayout}>
        <div css={emptyViewContainer}>
          <div css={emptyViewWrapper}>
            <img
              src={graphicImage.GuestImage}
              alt="게스트를 기다리는 중이에요"
              css={emptyViewImageStyle}
            />

            <div css={emptyText}>
              <span>아직 참가자를 기다리는 중이에요 </span>
              <span>클래스를 공유해 보세요!</span>
            </div>
          </div>

          <div css={emptyViewButtonStyle}>
            <Button variant="round" onClick={handleButtonClick}>
              클래스 공유하기
            </Button>
          </div>
        </div>
      </div>

      {isToastVisible && (
        <Toast isVisible={isToastVisible} toastBottom={10}>
          클립보드에 모임 링크를 복사했어요!
        </Toast>
      )}
    </>
  );
};

export default ClassManageEmptyView;
