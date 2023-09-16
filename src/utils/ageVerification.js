import { parse, startOfDay, differenceInYears, format } from 'date-fns';

export const verifyClientLegalAge = (birthdate) => {
    if (!birthdate) {
      throw new Error("Birthdate is required.");
    }
  
    const date = format(birthdate, 'yyyy-MM-dd');
  
    // Parse the birthdate string to a Date object using date-fns
    const birthDateObj = parse(date, 'yyyy-MM-dd', new Date());
  
    // Get the current date at midnight (00:00:00) using date-fns
    const currentDate = startOfDay(new Date());
  
    // Calculate the age using date-fns' differenceInYears function
    const age = differenceInYears(currentDate, birthDateObj);
  
    // Check if the age is less than 18
    return age < 18;
  };