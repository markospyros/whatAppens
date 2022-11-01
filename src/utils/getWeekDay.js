export let getWeekDay = () => {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = new Date();
  let day = weekDay[dayIndex.getDay()];

  return day;
};
