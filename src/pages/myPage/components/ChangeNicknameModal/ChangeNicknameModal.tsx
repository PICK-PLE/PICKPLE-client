import { useAtom } from 'jotai';
import { useRef, useState } from 'react';

import { usePatchGuestNickname } from '@apis/domains/guest/usePatchGuestNickname';

import { Button, Input } from '@components';
import { userAtom } from '@stores';
import theme from '@styles/theme';
import { useUpdateNickname } from 'src/hooks/useUpdateNickname';

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

interface ChangeNicknameModalProps {
  onClose: () => void;
}

const ChangeNicknameModal = ({ onClose }: ChangeNicknameModalProps) => {
  const [user] = useAtom(userAtom);
  const [value, setValue] = useState(user.guestNickname ?? '');
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const { mutateAsync: changeNickname } = usePatchGuestNickname(
    user.guestId ?? 0,
    setIsNicknameDuplicate,
    nicknameRef
  );
  const { updateNickname } = useUpdateNickname();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
  };

  const handleButtonClick = async () => {
    try {
      await changeNickname(value);
      updateNickname('guestNickname', value);

      onClose();
    } catch (err) {
      setIsNicknameDuplicate(true);
    }
  };

  const isDisabled =
    user.guestNickname === value ||
    value?.length === 0 ||
    value?.length > 15 ||
    value?.trim().length === 0;

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
              ref={nicknameRef}
              value={value}
              onChange={(e) => {
                setIsNicknameDuplicate((prevState) => (prevState === true ? false : prevState));
                handleInputChange(e);
              }}
              isCountValue={true}
              errorMessage={
                isNicknameDuplicate ? '* 이미 존재하는 닉네임이에요.' : '닉네임을 입력해 주세요.'
              }
              maxLength={15}
              isValid={!isNicknameDuplicate}
              customBorderColor={theme.color.purple1}
            />
          </section>
        </section>
        <section css={buttonWrapper}>
          <Button variant="xSmall" onClick={onClose} customStyle={cancelButtonStyle}>
            취소
          </Button>
          {isDisabled ? (
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
