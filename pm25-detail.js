const params = new URLSearchParams(location.search);

const lat = params.get("lat");
const lon = params.get("lon");
const name = params.get("name");

fetch(
`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm2_5,pm10,carbon_monoxide,nitrogen_dioxide`
)

.then(r=>r.json())

.then(data=>{

document.getElementById("province").innerHTML=name;

document.getElementById("pm25").innerHTML=data.current.pm2_5+" μg/m³";

document.getElementById("pm10").innerHTML=data.current.pm10+" μg/m³";

document.getElementById("co").innerHTML=data.current.carbon_monoxide;

document.getElementById("no2").innerHTML=data.current.nitrogen_dioxide;

});
