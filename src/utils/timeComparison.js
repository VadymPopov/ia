import { parse, subHours, isBefore, isEqual } from 'date-fns';

export const isTimeWithinLastHour = (selectedDate, timeString) => {
  const parsedTime = parse(timeString, 'h:mma', new Date());
  const hours = parsedTime.getHours();
  const minutes = parsedTime.getMinutes();
  selectedDate.setHours(hours, minutes, 0, 0);

  const parsedTimeMinusOneHour = subHours(selectedDate, 1);
  const currentTime = new Date();

  if (
    isBefore(currentTime, parsedTimeMinusOneHour) ||
    isEqual(currentTime, parsedTimeMinusOneHour)
  ) {
    return false;
  } else {
    return true;
  }
};
