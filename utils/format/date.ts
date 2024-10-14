// Note the syntax of these imports from the date-fns library.
// If you import with the syntax: import { format } from "date-fns" the ENTIRE library
// will be included in your production bundle (even if you only use one function).
// This is because react-native does not support tree-shaking.

import { Locale, differenceInDays, format, parseISO } from 'date-fns';
import { formatDistanceWithOptions } from 'date-fns/fp';
import { id } from 'date-fns/locale';

type Options = Parameters<typeof format>[2];

const getLocale = (): Locale => {
  return id;
};

export const formatDate = (
  date: string,
  dateFormat?: string,
  options?: Options
) => {
  if (!date) return '-';

  const locale = getLocale();
  const dateOptions = {
    ...options,
    locale,
  };
  return format(parseISO(date), dateFormat ?? 'MMM dd, yyyy', dateOptions);
};

// humanizeDuration
export const humanize = (date: string) => {
  return formatDistanceWithOptions({ addSuffix: true })(
    new Date(),
    new Date(date)
  );
};

// humenizeToDate
export const humanizeToDate = (date: string, days = 2, dateFormat?: string) => {
  if (!date) {
    return '';
  }
  const distanceDays = differenceInDays(new Date(), new Date(date));
  if (distanceDays <= days) {
    return humanize(date);
  }
  return formatDate(date, dateFormat);
};

// humanize get today / yesterday / date
export const humanizeToDay = (date: string, dateFormat?: string) => {
  const distanceDays = differenceInDays(new Date(), new Date(date));
  if (distanceDays === 0) {
    return 'Today';
  }
  if (distanceDays === 1) {
    return 'Yesterday';
  }
  return formatDate(date, dateFormat);
};

// get 00:00 iso but predict timezone
export const getZeroTimeFromISO = (date: string) => {
  const dateObj = new Date(date);
  return new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate()
  ).toISOString();
};

// h+day date
export const getDateFromDay = (day: number) => {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return date;
};
