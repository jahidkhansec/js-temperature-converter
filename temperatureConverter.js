function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function formatTemperature(value, unit) {
  return `${value}${unit}`;
}

const fahrenheit = celsiusToFahrenheit(25);
const celsius = fahrenheitToCelsius(68);
const freezingFahrenheit = celsiusToFahrenheit(0);
const freezingCelsius = fahrenheitToCelsius(32);

console.log(formatTemperature(fahrenheit, ' F'));
console.log(formatTemperature(celsius, ' C'));
console.log(formatTemperature(freezingFahrenheit, ' F'));
console.log(formatTemperature(freezingCelsius, ' C'));
