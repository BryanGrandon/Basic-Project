interface DateI {
  year: number;
  month: number;
  day: number;
}

const ageCalculatorTs = (data: DateI): number => {
  let year: number = new Date().getFullYear();
  let month: number = new Date().getMonth() + 1;
  let day: number = new Date().getDate();

  let ageOfUser: number =
    day >= data.day && month >= data.month
      ? year - data.year
      : year - data.year - 1;

  return ageOfUser;
};

let user = {
  day: 19,
  month: 12,
  year: 2002,
};

console.log(ageCalculatorTs(user));
console.log(ageCalculatorTs({ day: 19, month: 12, year: 2002 }));
