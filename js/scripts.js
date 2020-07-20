function dayOfWeek(){
  
  let year = document.querySelector(".year").value;
  let month = docment.querySelector(".month").value;
  let date = docment.querySelector(".date").value;
  let gender = docment.querySelector(".gender").value;
  if (month > 12 || date > 31) {
    document.querySelector("p").innerHTML = "You entered and invalid number, try again"
  } else {
  var result = year + month+ date
  }
  dayOfBirth = result
    
  CC = parseInt(dayOfBirth.slice(0,2))
  YY = parseInt(dayOfBirth.slice(2,4))
  MM = parseInt(dayOfBirth.slice(4,6))
  DD = parseInt(dayOfBirth.slice(6,8))
  
  
  d = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  d = Math.floor(d)
  alert(d)
  nameOfDays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","saturday"];
  alert("Your were born on a " + nameOfDays[d]);
  male = ['Kwasi','Kwadwo', 'Kwabena','Kwaku','Yaw',' Kofi', 'Kwame'];
  female = ['Akosua', 'Adwoa', 'Abenaa','Akua', 'Yaa','Afua','Ama'];
  if (MM > 12 || DD > 31) {
    document.querySelector("p").innerHTML = "You entered and invalid number, try again";
  }
  else if (gender === 'male') {
    document.querySelector("p").innerHTML = "Your name is " + male[d];
  } else {
    document.querySelector("p").innerHTML = 'Your name is '+ female[d];
  }
}
document.querySelector(.btn).addEventListener("click",dayOfWeek);