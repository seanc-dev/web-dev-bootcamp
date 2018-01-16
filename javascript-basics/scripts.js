var ageInYears = prompt("How old are you?")

var leapYears = (ageInYears - (ageInYears % 4)) / 4

var ageInDays = ageInYears * 365 + leapYears

alert("You are " + ageInDays + " days old")