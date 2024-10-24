interface Degrees {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

const celsius = (value: number): Degrees => {
  const degrees: Degrees = {
    fahrenheit: (((9 * value) / 5 + 32) * 100) / 100,
    celsius: (value * 100) / 100,
    kelvin: ((value + 273.15) * 100) / 100,
  };
  return degrees;
};

const fahrenheit = (value: number): Degrees => {
  const degrees: Degrees = {
    fahrenheit: (value * 100) / 100,
    celsius: (((5 * (value - 32)) / 9) * 100) / 100,
    kelvin: (((5 * (value - 32)) / 9 + 273.15) * 100) / 100,
  };
  return degrees;
};

const kelvin = (value: number): Degrees => {
  const degrees: Degrees = {
    fahrenheit: (((9 * (value - 273.15)) / 5 + 32) * 100) / 100,
    celsius: ((value - 273.15) * 100) / 100,
    kelvin: (value * 100) / 100,
  };
  return degrees;
};

const temperatureConverterTs = (value: number, type: string) => {
  const typeGrade: string = type.toLowerCase();

  switch (typeGrade) {
    case "celsius":
      return celsius(value);
    case "fahrenheit":
      return fahrenheit(value);
    case "kelvin":
      return kelvin(value);
    default:
      console.error(`${type} is invalid value.`);
      break;
  }
};

console.log(temperatureConverterTs(50, "celsius"));
console.log(temperatureConverterTs(122, "fahrenheit"));
console.log(temperatureConverterTs(323.15, "kelvin"));
