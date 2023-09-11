export const switchName = (selectedProcedure)=> {
    let procedureName;

    switch (selectedProcedure) {
      case 'small-tattoo':
        procedureName = "Small Tattoo";
        break;
      case 'large-tattoo':
        procedureName = "Large Tattoo";
        break;
      case 'permanent':
        procedureName = "Permanent Makeup";
        break;
      case 'consultation':
        procedureName = "Consultation";
        break;
      default:
       procedureName = "Small Tattoo";
    }
  
    return procedureName;
}

export const calculatePrice = (selectedProcedure)=> {
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
      case 'consultation':
        price = 0;
        break;
      default:
      price = 0;
    }
  
    return price;
}