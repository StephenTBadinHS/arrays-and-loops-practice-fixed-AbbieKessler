const leapYears = function() {
var year = 1800;
leap = false;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0)
      leap = true;
    else
      leap = false;
  }
  else
    leap = true;
}
else
  leap = false;
if (leap)
  console.log(year + " is a leap year.");
else
  console.log(year + " is not a leap year.");
};

// Do not edit below this line
console.log(leapYears);
