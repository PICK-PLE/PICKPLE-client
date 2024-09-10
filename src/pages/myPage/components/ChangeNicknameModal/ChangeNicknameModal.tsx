import { Button, Input } from '@components';
import {
  abledStyle,
  blueColor,
  buttonWrapper,
  cancelButtonStyle,
  changeNicknameModalLayout,
  changeNicknameModalWrapper,
  descriptionStyle,
  descriptionWrapper,
  disabledStyle,
  inputWrapper,
  modalHeaderWrapper,
  modalTitle,
  modalTitleWrapper,
  titleStyle,
} from './ChangeNicknameModal.style';
import { useState } from 'react';
import theme from '@styles/theme';
import { useAtom, useSetAtom } from 'jotai';
import { userAtom } from '@stores';
import { usePatchGuestNickname } from '@apis/domains/guest/usePatchGuestNickname';

interface ChangeNicknameModalProps {
  onClose: () => void;
}

const ChangeNicknameModal = ({ onClose }: ChangeNicknameModalProps) => {
  const [{ guestNickname, guestId }] = useAtom(userAtom);
  const [value, setValue] = useState<string>(guestNickname as string);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const setUser = useSetAtom(userAtom);
  const { mutate: changeNickname, isError } = usePatchGuestNickname(
    guestId ?? 0,
    setErrorMessage,
    setUser
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // 길이가 0 이상이고 15자 이하일 때는 에러 없음
    if (newValue.length > 0 && newValue.length <= 15) {
      setErrorMessage('');
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleButtonClick = () => {
    if (!isError) {
      changeNickname(value);
      onClose();
    } else {
      setErrorMessage('닉네임 변경 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <article css={changeNicknameModalLayout}>
      <div css={changeNicknameModalWrapper}>
        <section css={modalTitleWrapper}>
          <div css={modalTitle}>
            <h1 css={titleStyle}>닉네임 변경</h1>
            <div css={modalHeaderWrapper}>
              <div css={descriptionWrapper}>
                <p css={blueColor}>잠깐! </p>
                <p css={descriptionStyle}> 신청한 클래스가 있다면</p>
              </div>
              <p css={descriptionStyle}>입금 확인을 위해 현재 닉네임을 유지해 주세요.</p>
            </div>
          </div>
          <section css={inputWrapper}>
            <Input
              value={value}
              onChange={handleInputChange}
              isCountValue={true}
              errorMessage={errorMessage}
              maxLength={15}
              isValid={!hasError}
              customBorderColor={theme.color.purple1}
            />
          </section>
        </section>
        <section css={buttonWrapper}>
          <Button variant="xSmall" onClick={onClose} customStyle={cancelButtonStyle}>
            취소
          </Button>
          {guestNickname === value || value?.length === 0 || value?.length > 15 ? (
            <Button variant="xSmall" onClick={() => {}} customStyle={disabledStyle} disabled>
              저장
            </Button>
          ) : (
            <Button variant="xSmall" onClick={handleButtonClick} customStyle={abledStyle}>
              저장
            </Button>
          )}
        </section>
      </div>
    </article>
  );
};

export default ChangeNicknameModal;
