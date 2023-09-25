import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getKoreaTimeFromNow = (time: string) => {
  return dayjs(time).locale('ko').fromNow();
};

export const getDate = (time: string) => {
  return dayjs(time).format('YYYY-MM-DD');
};
