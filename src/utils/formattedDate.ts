import {DateTime} from 'luxon';

export const formattedDate = (postDate: string) => {
  const date = postDate;
  const preparedDate = DateTime.fromISO(date).toFormat('DDDD');

  return preparedDate;
};
