import PayButton from 'src/components/common/PayButton/PayButton';
import { payButtonsStyle } from './Dev.style';

const Dev = () => {
  return (
    <div css={payButtonsStyle}>
      <PayButton variant="kakao" />
      <PayButton variant="toss" />
    </div>
  );
};

export default Dev;
