import {
  buttonStyle,
  inputStyle,
  labelStyle,
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
    <div css={selectButtonContainer}>
      <section css={[buttonStyle, leftButton, left === selected && selectedButton]}>
        <input
          css={inputStyle}
          id="left"
          type="radio"
          name="left-option"
          value={left}
          checked={selected === left}
          onClick={onClick}
        />
        <label css={labelStyle} htmlFor="left">
          {left}
        </label>
      </section>
      <section css={[buttonStyle, rightButton, right === selected && selectedButton]}>
        <input
          css={inputStyle}
          id="right"
          type="radio"
          name="right-option"
          value={right}
          checked={selected === right}
          onClick={onClick}
        />
        <label css={labelStyle} htmlFor="right">
          {right}
        </label>
      </section>
    </div>
  );
};

export default SelectButton;