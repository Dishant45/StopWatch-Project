//this function is stop watch function which does the processing and increments time

let sec=0;
let min=0;
let hour=0;
let displaysec=0;
let displayminutes=0;
let displayhours=0;


export const startStopwatch=()=>{
  sec++;
    if(sec/60==1){
    sec=0;
    min++;
}
if(min/60==1){ 
    min=0;
    hour++
}
if(sec<10){
  displaysec="0"+sec.toString();
}
else{
  displaysec=sec;
}
if(min<10){
  displayminutes="0"+min.toString();
}
else{
  displayminutes=min;
}
if(hour<10){
  displayhours="0"+hour.toString();
}
else{
  displayhours=hour;
}
const timer=document.getElementById("timer")
timer.innerHTML=displayhours+":"+displayminutes +":"+displaysec;
}
 var starttimer=window.setInterval(startStopwatch,1000,sec,min,hour);

