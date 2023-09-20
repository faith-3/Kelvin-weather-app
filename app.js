//The line of code below specifies a value 293 assigned to a constant variable kelvin
let kelvin;

const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

let userQuestion;

// Ask the user for their names 
line.question('Kelvin temperature to be converted(Just write the value only ): ', (tempKelvin) => {
  kelvin = tempKelvin;

//The line of code below specifies of celcius degrees subtracted from kelvin constant value assigned to it before assigned to a constant variable celcius
const celcius = kelvin - 273;
//The line of code below specifies a value assigned to a constant variable Fahrenheit
let Fahrenheit = celcius * (9/5) + 32 ;
//I rounded off the Fahrenheit temperature using the .floor() method which will round the temperature to the largest integer less than or equal to the decimal
Fahrenheit = Math.floor(Fahrenheit);
let newton = celcius * (33/100);
newton= Math.floor(newton);
console.log(`The temperature in Celsius is: ${celcius} degrees celsius .\nThe temperature in Fahrenheits is: ${Fahrenheit} degrees Fahrenheit.\nThe temperature in newton is: ${newton} newton .`)
});