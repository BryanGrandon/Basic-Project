const temperatureConverter = (value, type) => {
  let valueTemperature = Number(value);
  const typeGrade = type.toLowerCase();

  const degrees = {
    celsius: 0,
    fahrenheit: 0,
    kelvin: 0,
  };

  switch (typeGrade) {
    case "celsius":
      degrees.celsius = valueTemperature;
      degrees.fahrenheit = (9 * valueTemperature) / 5 + 32;
      degrees.kelvin = valueTemperature + 273.15;
      break;

    case "fahrenheit":
      degrees.fahrenheit = valueTemperature;
      degrees.celsius = (5 * (valueTemperature - 32)) / 9;
      degrees.kelvin = (5 * (valueTemperature - 32)) / 9 + 273.15;
      break;

    case "kelvin":
      degrees.kelvin = valueTemperature;
      degrees.celsius = valueTemperature - 273.15;
      degrees.fahrenheit = (9 * (valueTemperature - 273.15)) / 5 + 32;
      break;
  }

  degrees.celsius = Math.round(degrees.celsius * 100) / 100;
  degrees.fahrenheit = Math.round(degrees.fahrenheit * 100) / 100;
  degrees.kelvin = Math.round(degrees.kelvin * 100) / 100;

  return degrees;
};

console.log(temperatureConverter(50, "celsius"));
console.log(temperatureConverter(122, "fahrenheit"));
console.log(temperatureConverter(323.15, "kelvin"));
