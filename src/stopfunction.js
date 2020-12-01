
let position="stop";

export const startstopFunction=()=>{
if(position==="stop"){
    interval=starttimer;
    document.getElementById("startstop").innerHTML="STOP";
    postion="start";
}
else{
     window.clearInterval(interval);
     document.getElementById("startstop").innerHtml="START"
     position="stop";
}

}