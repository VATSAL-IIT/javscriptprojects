// var hour=document.getElementById("hour");
// var minute=document.getElementById("minute");
// var second=document.getElementById("second");
setInterval(()=>{
    date=new Date();
    hourtime=date.getHours();
    secondtime=date.getSeconds();
    mintime=date.getMinutes();
    hrotation=30*hourtime+0.5*mintime;
    srotation=6*secondtime;
    mrotation=6*mintime+0.1*secondtime;
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000)
