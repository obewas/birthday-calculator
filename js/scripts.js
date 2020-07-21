  
function dayOfWeek() {
  

var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var date = document.getElementById("date").value;

var fullDate = year + month + date;
}
var dayOfBirth = fullDate
//document.write(dayOfBirth)
   
var CC = parseInt(dayOfBirth.slice(0,2))
var YY = parseInt(dayOfBirth.slice(2,4))
var MM = parseInt(dayOfBirth.slice(4,6))
var DD = parseInt(dayOfBirth.slice(6,8))
  
 var a = Math.floor(CC/4 - 2*CC-1)
 var b = Math.floor(5*YY/4)
 var c = Math.floor(26*(MM+1)/10)
 var d = DD
 var weekday = (a + b + c + d)
 weekday = weekday % 7
 

 var nameOfDays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","saturday"];
 var male = ['Kwasi','Kwadwo', 'Kwabena','Kwaku','Yaw',' Kofi', 'Kwame'];
 var female = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa','Afua','Ama'];
 document.write("Your were born on a " + nameOfDays[weekday]);

var weekday = 1
var gender = document.getElementById("gender").value;
  if (gender === 'male') {
    document.getElementById('result')= "Your name is " + male[weekday];
  } else 
   document.getElementById('result')='Your name is '+ female[weekday];
