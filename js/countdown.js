var countTo = new Date("Oct 4 2019 16:30:00 UTC-0500");
var interval = setInterval(function() {
    updCountdown(interval);
}, 1000);
updCountdown(interval);

function updCountdown(intvl) {
    var now = new Date();
    var remainMS = countTo.getTime() - now.getTime() + 60000 * (countTo.getTimezoneOffset() - now.getTimezoneOffset());
    
    var dayCount = Math.floor(remainMS / 86400000);
    var hourCount = Math.floor((remainMS % 86400000) / 3600000);
    var minCount = Math.floor((remainMS % 3600000) / 60000);
    var secCount = Math.floor((remainMS % 60000) / 1000);
    
    document.getElementById("day_count").innerHTML = (dayCount < 10 ? "0": "") + dayCount;
    document.getElementById("hour_count").innerHTML = (hourCount < 10 ? "0": "") + hourCount;
    document.getElementById("min_count").innerHTML = (minCount < 10 ? "0": "") + minCount;
    document.getElementById("sec_count").innerHTML = (secCount < 10 ? "0": "") + secCount;
    
    document.getElementById("day_s").innerHTML = dayCount == 1 ? "" : "s";
    document.getElementById("hour_s").innerHTML = hourCount == 1 ? "" : "s";
    document.getElementById("min_s").innerHTML = minCount == 1 ? "" : "s";
    document.getElementById("sec_s").innerHTML = secCount == 1 ? "" : "s";
    
    if (remainMS <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Welcome to the Jam!";
    }
}