export default (yearsToTravel) => {
    const currentYear = 2050;
  
    const year = currentYear - yearsToTravel;
  
    if (year < 0) {
      throw new Error('Error! Hacking too much time!');
    }
  
    return year;
  };