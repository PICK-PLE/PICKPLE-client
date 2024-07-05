import {
  buttonStyle,
  leftButton,
  rightButton,
  selectButtonContainer,
  selectedButton,
} from './SelectButton.style';

interface SelectButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  left: string;
  right: string;
  selected: string;
}

const SelectButton = ({ left, right, selected, onClick }: SelectButtonProps) => {
  return (
    <section css={selectButtonContainer}>
      <div css={[buttonStyle, leftButton, left === selected && selectedButton]} onClick={onClick}>
        {left}
      </div>
      <div css={[buttonStyle, rightButton, right === selected && selectedButton]} onClick={onClick}>
        {right}
      </div>
    </section>
  );
};

export default SelectButton;
