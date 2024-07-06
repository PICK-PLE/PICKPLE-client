import PayButton from 'src/components/common/buttons/PayButton/PayButton';
import { payButtonsStyle } from './Dev.style';

const Dev = () => {
  return (
    <div css={payButtonsStyle}>
      <PayButton variant="kakao" totalPrice={10000} />
      <PayButton variant="toss" totalPrice={10000} />
    </div>
  );
};

export default Dev;
