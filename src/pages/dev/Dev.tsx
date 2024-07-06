import NavigateBox from 'src/components/common/NavigateBox/NavigateBox';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';

const Dev = () => {
  const userId = 'aefvzev3213';
  return (
    <div>
      <NavigateBox path={'/'}>
        <SimpleUserProfile username={'화랑이'} />
      </NavigateBox>
      <NavigateBox path={`/${userId}`}>my 클래스 모임</NavigateBox>
      <NavigateBox path={'/'}>픽플에 문의하기</NavigateBox>
    </div>
  );
};

export default Dev;
