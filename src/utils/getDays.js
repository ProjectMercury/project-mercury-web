export const getDates = current => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(new Date(current));
    current.setDate(current.getDate() - 1);
  }
  return week;
};

export const getDaysInteger = () => {
  let dates = getDates(new Date());
  const days = dates.map(date => date.getDay());
  return days;
};

export const getDaysEdited = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dates = getDates(new Date());
  const days = dates.map(date =>
    date.getDay() === new Date().getDay() ? "Today" : weekDays[date.getDay()]
  );
  return days;
};
export const getDays = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dates = getDates(new Date());
  const days = dates.map(date => weekDays[date.getDay()]);
  return days;
};
