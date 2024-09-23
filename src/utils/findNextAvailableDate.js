import { addDays } from 'date-fns';
import { isNotMonTueWed } from './isNotMonTueWed';

export const findNextAvailableDate = () => {
  let dateToCheck = new Date();

  for (let i = 0; i < 30; i++) {
    if (isNotMonTueWed(dateToCheck)) {
      return dateToCheck;
    }
    dateToCheck = addDays(dateToCheck, 1);
  }

  return null;
};
