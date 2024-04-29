export const switchName = selectedProcedure => {
  let procedureName;

  switch (selectedProcedure) {
    case 'small-tattoo':
      procedureName = 'Small Tattoo';
      break;
    case 'large-tattoo':
      procedureName = 'Large Tattoo';
      break;
    case 'permanent':
      procedureName = 'Permanent Makeup';
      break;
    case 'touch-up':
      procedureName = 'Touch-up';
      break;
    default:
      procedureName = 'Small Tattoo';
  }

  return procedureName;
};

export const calculatePrice = selectedProcedure => {
  let price;

  switch (selectedProcedure) {
    case 'small-tattoo':
      price = 100;
      break;
    case 'large-tattoo':
      price = 120;
      break;
    case 'permanent':
      price = 100;
      break;
    case 'touch-up':
      price = 20;
      break;
    default:
      price = 0;
  }

  return price;
};

export const pickDuration = selectedProcedure => {
  let duration;

  switch (selectedProcedure) {
    case 'small-tattoo':
      duration = 60;
      break;
    case 'large-tattoo':
      duration = 120;
      break;
    case 'permanent':
      duration = 60;
      break;
    case 'touch-up':
      duration = 30;
      break;
    default:
      duration = 60;
  }

  return duration;
};

export const calculateTip = (amount, percentage) => {
  switch (percentage) {
    case 15:
      return amount * 0.15;
    case 20:
      return amount * 0.2;
    case 25:
      return amount * 0.25;
    case 30:
      return amount * 0.3;
    default:
      throw new Error('Invalid tip percentage');
  }
};
