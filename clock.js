
function clock() {
    const today = new Date();
    var hours = today.getHours();
    var hours = (hours%12) || 12;
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const ampm = document.getElementById("ampm");

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

    if (hours >= 12) {
        ampm.innerHTML = "PM"
    } else {
        ampm.innerhtml = "AM";
    }

}

function calendarDate() {
    const newDay = new Date();
    const year = newDay.getFullYear();
    const month = newDay.getMonth();
    const day = getDayByIndex(newDay.getDay());
    
    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
}

setInterval(clock, 10);
clock();






