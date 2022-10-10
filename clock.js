
function clock() {
    const today = new Date();
    var hours = today.getHours();
    var hours = (hours%12) || 12;
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const ampm = today.getHours()

    document.getElementById("hours").innerHTML = leadingZeroHour();
    document.getElementById("minutes").innerHTML = leadingZeroMin();
    document.getElementById("seconds").innerHTML = leadingZeroSec();
    
    function leadingZeroSec() {
        return("0" + seconds).slice(-2)
    }
    
    function leadingZeroMin() {
        return("0" + minutes).slice(-2)
    } 

    function leadingZeroHour() {
        return("0" + hours).slice(-2)
    } 

    var ampm2;

    if (ampm >= 12) {
        ampm2 = "PM"    
    } else {
        ampm2 = "AM"
    }

    document.getElementById("ampm").innerHTML = ampm2

}

function calendarDate() {
    const newDay = new Date();
    const year = newDay.getFullYear();
    const month = newDay.getMonth();
    const day = newDay.getDate();
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const weekday2 = weekday[newDay.getDay()];
    const monthName2 = monthName[newDay.getMonth()];
    
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = day
    document.getElementById("month").innerHTML = monthName2;
    document.getElementById("weekday").innerHTML = weekday2;

    var suffix;

    if (day == 1 || day == 21 || day == 31) {
        suffix = "st"
    }    
    else if (day == 2 || day == 22) {
        suffix = "nd"
    }
    else if (day == 3 || day == 23) {
        suffix = "rd"
    } else {
        suffix = "th"
    }

    document.getElementById("suffix").innerHTML = suffix

}

setInterval(clock, 10);
clock();
calendarDate();







