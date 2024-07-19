export const checkDay = date => {
  const ottawaDateRange = [14, 15, 16, 17, 18];
  const day = Number(date.split('.')[1]);
  const month = Number(date.split('.')[0]);
  if (ottawaDateRange.includes(day) && month === 7) {
    return '155 Loretta Ave N, Ottawa, ON K1Y 3E5';
  }

  return '689 St. Clair Avenue West, Toronto, Ontario M6C 1B2, Canada';
};
