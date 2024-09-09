import { Button, Input } from '@components';
import {
  blueColor,
  buttonWrapper,
  cancelButtonStyle,
  changeNicknameModalLayout,
  changeNicknameModalWrapper,
  customInputStyle,
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
import { useAtom } from 'jotai';
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
  const { mutate: changeNickname, isError } = usePatchGuestNickname(guestId ?? 0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length === 0) {
      setErrorMessage('* 필수 입력 항목이에요');
      setHasError(true);
    } else if (newValue.length >= 15) {
      setErrorMessage('* 글자 수 15 이하로 작성해주세요');
      setHasError(true);
    } else if (newValue.length > 0 || newValue.length < 15) {
      setHasError(false);
      setErrorMessage(' ');
    }

    // else if (isError) {
    //   setErrorMessage('* 이미 존재하는 닉네임이에요.');
    //   setHasError(true);
    // }
  };

  //   글자수가 0이면, 필수 입력 항목이에요.
  //   글자수가 15자 이상이면 글 자수 15자 이하 작성 에러메세지.
  //   저장 버튼 클릭 했을 때 이미 존재하는 닉네임이라면 이미 존재하는 닉네임이에요 출력

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
              customStyle={customInputStyle(hasError)(theme)}
              //   isValid={hasError}
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
            <Button variant="xSmall" onClick={() => changeNickname(value ?? '')}>
              저장
            </Button>
          )}
        </section>
      </div>
    </article>
  );
};

export default ChangeNicknameModal;
