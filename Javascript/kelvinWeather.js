//forecast today in kelvin
const kelvin = 293;
//celsius is kelvin minus 273 degrees
let celsius = kelvin - 273;
//fahrenheit's formula
let fahrenheit = (Math.floor(celsius * (9 / 5) + 32));
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');
//newton outro modo
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log('The temperature is ' + newton + ' degrees Newton');