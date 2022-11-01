export let getWeekNumber = () => {
  const currentDate = new Date();

  const one = new Date(currentDate.getFullYear(), 0, 1);

  const numberOfDays = Math.floor((currentDate - one) / (24 * 60 * 60 * 1000));

  const weekNumber = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);

  return weekNumber.toString();
};
