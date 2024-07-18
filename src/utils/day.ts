import dayjs from 'dayjs';

export const formatCreatedDate = (dateString: string) => {
  const date = dayjs(dateString, 'YYYY.MM.DD HH:mm:ss');
  const now = dayjs();

  const minutesDifference = now.diff(date, 'minute');
  const hoursDifference = now.diff(date, 'hour');

  if (minutesDifference < 1) {
    return '방금 전';
  } else if (minutesDifference < 60) {
    return `${minutesDifference}분 전`;
  } else if (hoursDifference < 24) {
    return `${hoursDifference}시간 전`;
  } else {
    return date.format('YYYY.MM.DD');
  }
};

export const dDayText = (dayOfDay: number) => {
  let dDayText;
  if (dayOfDay < 0) {
    dDayText = '';
  } else if (dayOfDay === 0) {
    dDayText = ' D-DAY';
  } else {
    dDayText = ` D-${dayOfDay}`;
  }

  return dDayText;
};
