import FilterSelect from 'src/components/common/select/Select/FilterSelect';

const Dev = () => {
  return (
    <>
      <FilterSelect
        options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
      />
    </>
  );
};

export default Dev;
