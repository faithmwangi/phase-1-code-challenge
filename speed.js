// Challenge 2: Speed Detector

//prompt the user to input car's speed
const speed = prompt("Enter speed of the car in km/h: ");

//Define speed limit
const speedLimit = 70;
//Define demerit point per 5kmh
const points = 1;
//Calculate demerit point
if (speed > 0){
    const demeritPoints = Math.floor((speed - speedLimit)/5) * points;

    //check if speed is over the limit
    if (demeritPoints > 12) {
        console.log("License suspended");
      } else if (demeritPoints > 0) {
        console.log(`Points: ${demeritPoints}`);
      } else {
        console.log("Ok");
      }
    } else {
      console.log("Invalid input");
    }