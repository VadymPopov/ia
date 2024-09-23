export const isNotMonTueWed = date => {
  const day = date.getDay();
  const month = new Date(date).getMonth();
  const dayNumber = new Date(date).getDate();

  if ((dayNumber === 17 || dayNumber === 18 || dayNumber === 19) && month === 9)
    return false;
  if ((dayNumber === 15 || dayNumber === 22 || dayNumber === 29) && month === 9)
    return true;
  return day !== 1 && day !== 2 && day !== 3;
};
