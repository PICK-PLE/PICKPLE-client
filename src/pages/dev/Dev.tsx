import FilterSelect from 'src/components/common/select/FilterSelect/FilterSelect';

const Dev = () => {
  return (
    <>
      <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FilterSelect
          options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
        />
      </div>
      <div css={{ display: 'flex', justifyContent: 'center' }}>
        <FilterSelect
          options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
        />
      </div>
      <div>
        <FilterSelect
          options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
        />
      </div>
    </>
  );
};

export default Dev;
