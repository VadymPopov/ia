export const isNotMonTueWed = date => {
  const day = date.getDay();
  const month = new Date(date).getMonth();
  const dayNumber = new Date(date).getDate();

  if (
    ((dayNumber === 5 ||
      dayNumber === 6 ||
      dayNumber === 12 ||
      dayNumber === 13 ||
      dayNumber === 18) &&
      month === 10) ||
    (dayNumber === 29 && month === 9)
  )
    return true;
  return day !== 1 && day !== 2 && day !== 3;
};
