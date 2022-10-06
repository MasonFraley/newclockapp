
function clock() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const ampm = document.getElementById("ampm");

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds
    
    if (hours >= 12) {
        ampm.innerHTML = "PM"
    }
}

function calendarDate() {
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = getDayByIndex(today.getDay());
    
    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
}



