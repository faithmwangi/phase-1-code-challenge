function checkSpeed() {
  const speed = document.getElementById("speed").value;

  //Define speed limit
  const speedLimit = 70;
  //Define demerit point per 5kmh
  const points = 1;
  //Calculate demerit point
  if (speed > 0){
      const demeritPoints = Math.floor((speed - speedLimit)/5) * points;

      //check if speed is over the limit
      if (demeritPoints > 12) {
          document.getElementById("output").innerHTML = "License suspended";
        } else if (demeritPoints > 0) {
          document.getElementById("output").innerHTML = `Points: ${demeritPoints}`;
        } else {
          document.getElementById("output").innerHTML = "Ok";
        }
      } else {
        document.getElementById("output").innerHTML = "Invalid input";
      }
}
