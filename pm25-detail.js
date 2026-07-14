const params = new URLSearchParams(location.search);

const lat = params.get("lat");
const lon = params.get("lon");
const name = params.get("name");

fetch(
`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm2_5,pm10,carbon_monoxide,nitrogen_dioxide`
)
.then(response => response.json())
.then(data => {

    document.getElementById("province").innerHTML = name;

    const pm = data.current.pm2_5;

    document.getElementById("pm25").innerHTML = pm + " μg/m³";
    document.getElementById("pm10").innerHTML = data.current.pm10 + " μg/m³";
    document.getElementById("co").innerHTML = data.current.carbon_monoxide;
    document.getElementById("no2").innerHTML = data.current.nitrogen_dioxide;

    let status = "";
    let advice = "";

    if (pm <= 15) {
        status = "Good";
        advice = "Normal outdoor activities can be enjoyed.";
        document.getElementById("status").className = "detail-status good";
    }
    else if (pm <= 25) {
        status = "Moderate";
        advice = "Sensitive groups should monitor symptoms.";
        document.getElementById("status").className = "detail-status moderate";
    }
    else if (pm <= 37.5) {
        status = "Unhealthy for Sensitive Groups";
        advice = "Reduce prolonged or heavy outdoor exertion.";
        document.getElementById("status").className = "detail-status unhealthy";
    }
    else if (pm <= 75) {
        status = "Unhealthy";
        advice = "Wear an N95 mask when going outdoors.";
        document.getElementById("status").className = "detail-status very-unhealthy";
    }
    else {
        status = "Hazardous";
        advice = "Avoid going outdoors and stay in a closed room.";
        document.getElementById("status").className = "detail-status hazardous";
    }

    document.getElementById("status").innerHTML = status;
    document.getElementById("advice").innerHTML = advice;

})
.catch(error => {
    console.error(error);
});
