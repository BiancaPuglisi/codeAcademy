let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 11;
if (raceNumber && registeredEarly > 18) {
  raceNumber += 1000
}
else if (!registeredEarly && runnerAge > 18) {
  raceNumber += 1000
}
if (registeredEarly && runnerAge > 18) {
  console.log(`Your race starts at 9:30am, your race number is ${raceNumber}.`);
}
else if (!registeredEarly && runnerAge > 18) {
  console.log(`Late adults run at 11am, your race number is ${raceNumber}.`)
}
else if (runnerAge < 18) {
  console.log(`Race starts at 12:30am, your race number is ${raceNumber}.`)
}
else { 
  console.log(`Please see the registration desk`)
}