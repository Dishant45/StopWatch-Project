let sec=0;
let min=0;
let hour=0;
let displaysec=0;
let displayminutes=0;
let displayhours=0;
let interval=null;
let status="stop";

const stopwatch=()=>{
    sec++;
    if(sec/60==1){
    sec=0;
    min++;

if(min/60==1){ 
    min=0;
    hour++;
}
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
  document.getElementById("display").innerHTML=displayhours+":"+displayminutes+":"+displaysec;
}




const startstop=()=>{
    if(status=="stop"){
        interval=window.setInterval(stopwatch,1000);
        document.getElementById("startstop").innerHTML="STOP";
        status="start";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML="START";
        status="stop";
    }
}

function reset(){

    window.clearInterval(interval);
    sec=0;
    min=0;
    hour=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startstop").innerHTML="START";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const hamburger =document.getElementById('hamburger');
const  navUL= document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
   navUL.classList.toggle('show');
   
})   


