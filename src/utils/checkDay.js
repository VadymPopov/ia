export const checkDay = date => {
  const ottawaDateRange = [14, 15, 16, 17, 18];
  const [month, day] = date.split('.').map(Number);
  if (ottawaDateRange.includes(day) && month === 8) {
    return '155 Loretta Ave N, Ottawa, ON K1Y 3E5, Canada';
  }

  return '689 St. Clair Avenue West, Toronto, Ontario M6C 1B2, Canada';
};
