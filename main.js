let timeElement = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let elapsed = 0;
let IntervalId =null;

function updateTime() {
 const ms = Math.floor(elapsed % 100);
 const s = Math.floor(elapsed % 1000);
 const ten = Math.floor(elapsed % 10000);
 const hundred = Math.floor(elapsed % 100000);
 // body...
 const msStr = ms.toString();
 const sStr = s.toString();
 const tenStr = ten.toString();
 const hundredStr = hundred.toString();
 
 /*global $*/
 $(document).ready(function(){
 $('time').html('${msStr}:${sStr}:${tenStr}:${hundredStr}') ;
 });
 
}
 
start.addEventListener('click',function (e) {
 if (IntervalId !== null) {return};
 let pre = new Date(); 
 IntervalId=setInterval(function () {
  const now = new Date();
  elapsed += pre - now;
  pre = now;
  updateTime();
  
 },100);
});

stop.addEventListener('click',function() {
  clearInterval('IntervalId');
  IntervalId=null;
}) ;
 
reset.addEventListener('click',function () {
 elapsed = 0;
 updateTime();
}) ;
 // body...
 // body...