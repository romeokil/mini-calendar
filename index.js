const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");

const getData=new Date();
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
const days=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
date.innerHTML=(getData.getdate<10?"0":"")+getData.getDate();
day.innerHTML=days[getData.getDay()];
month.innerHTML=months[getData.getMonth()];
year.innerHTML=getData.getFullYear();
// console.log(getData);
// console.log(date);
// console.log(day);
// console.log(month);
// console.log(year);
