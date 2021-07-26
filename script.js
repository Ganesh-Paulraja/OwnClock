function clock(){
    let time,second,minute,hour,month,dayName,dayNumber,year,period;
    time=new Date();
   second=time.getSeconds();
    minute=time.getMinutes();
  
   hour =time.getHours();
   month=time.getMonth()
  dayName=time.getDay();
dayNumber=time.getDate();
year=time.getFullYear();
function digit(dig){
    if(10>dig){
        dig= "0"+dig;
    }
    else{
        dig=dig;
    }
    return dig;
}

if(hour==12){
    period="noon";
}
else if(hour>12 ){
    period="P.M";
}
else if(hour==0){
    period="P.M";
}

else{
    period="A.M";
}

if(hour==0){
    hour=12;
}
else if(hour>12){
    hour=hour-12;
}
else{
    hour=hour;
}

let dayList=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saterday"];
let monthList= ["January","February","March","April","May","June","July","Augest","September","October","November","December"]
let ids =["dayName","dayNumber","month","year","hour","minute","second","period"];
let values =[dayList[dayName],digit(dayNumber),monthList[month],year,digit(hour),digit(minute),digit(second),period];
for(i=0; i<ids.length; i++){
    document.getElementById(ids[i]).innerText=values[i];

setInterval(clock,1000);
}
}
clock();