let hrsSpan = document.querySelector(".hrs");
let minSpan = document.querySelector(".min");
let secSpan = document.querySelector(".sec");

function updateTime(){
    const date = new Date();
    
    hrsSpan.innerHTML = (date.getHours() < 10? "0" : "") + date.getHours();
    minSpan.innerHTML = (date.getMinutes() < 10? "0" : "") + date.getMinutes();
    secSpan.innerHTML = (date.getSeconds() < 10? "0" : "") + date.getSeconds();

};

setInterval(updateTime, 1000);