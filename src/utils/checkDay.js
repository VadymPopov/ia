export const checkDay = date => {
  const ottawaDateRange = [18, 19, 20];
  const [month, day] = date.split('.').map(Number);
  if (ottawaDateRange.includes(day) && month === 10) {
    return '337 E Broadway, Vancouver, BC V5T 1W5';
  }

  return '689 St. Clair Avenue West, Toronto, Ontario M6C 1B2, Canada';
};
