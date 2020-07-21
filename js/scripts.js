  
function dayOfWeek(){  
  var year=document.getElementById("year").value;
  var month =document.getElementById("month").value; 
  var date =document.getElementById("date").value; 
  //alert(year+month +date);  
  var fullDate = year + month + date
  CC = parseInt(fullDate.slice(0,2))
  YY = parseInt(fullDate.slice(2,4))
  MM = parseInt(fullDate.slice(4,6))
  DD = parseInt(fullDate.slice(6,8))
  
  var a = Math.floor(CC/4 - 2*CC-1)
   var b = Math.floor(5*YY/4)
   var c = Math.floor(26*(MM+1)/10)
   var d = DD
   var weekday = (a + b + c + d)
   weekday = weekday % 7
   alert(weekday)
   var gender = document.getElementById('gender').value;
   var nameOfDays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","saturday"];
   var male = ['Kwasi','Kwadwo', 'Kwabena','Kwaku','Yaw',' Kofi', 'Kwame'];
   var female = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa','Afua','Ama'];
   if (gender === male) {
     document.getElementById("result").innerHTML = ("You were born on a" + nameOfDays[weekday] + "." + "Your Akan name is "+ male[weekday])
     } else {
       document.getElementById("result").innerHTML = ("You were born on a" + nameOfDays[weekday] + "." + "Your Akan name is "+ female[weekday])
     }
  } 