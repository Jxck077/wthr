const pm = data.current.pm2_5;

document.getElementById("pm25").innerHTML = pm + " μg/m³";

let status = "";
let advice = "";

if (pm <= 15) {
    status = "Good";
    advice = "Normal outdoor activities can be enjoyed.";
} else if (pm <= 25) {
    status = "Moderate";
    advice = "Sensitive groups should monitor symptoms.";
} else if (pm <= 37.5) {
    status = "Unhealthy for Sensitive Groups";
    advice = "Reduce prolonged or heavy outdoor exertion.";
} else if (pm <= 75) {
    status = "Unhealthy";
    advice = "Wear an N95 mask when going outdoors.";
} else {
    status = "Hazardous";
    advice = "Avoid going outdoors and stay in a closed room.";
}

document.getElementById("status").innerHTML = status;
document.getElementById("advice").innerHTML = advice;
