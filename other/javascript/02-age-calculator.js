const ageCalculator = (dateData) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  let ageOfUser;

  if (month >= dateData.month) {
    day >= dateData.day
      ? (ageOfUser = year - dateData.year)
      : (ageOfUser = year - dateData.year - 1);
  } else {
    ageOfUser = year - dateData.year - 1;
  }
  return ageOfUser;
};

const data = {
  year: 2002,
  month: 12,
  day: 19,
};

console.log(ageCalculator(data));
