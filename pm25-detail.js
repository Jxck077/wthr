const params = new URLSearchParams(location.search);

const lat = params.get("lat");
const lon = params.get("lon");
const name = params.get("name");

document.getElementById("province").textContent = name;

fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm2_5,pm10,carbon_monoxide,nitrogen_dioxide`)
.then(r => r.json())
.then(data => {

    console.log(data);
    alert(JSON.stringify(data));

    document.getElementById("pm25").textContent = data.current.pm2_5;
    document.getElementById("pm10").textContent = data.current.pm10;
    document.getElementById("co").textContent = data.current.carbon_monoxide;
    document.getElementById("no2").textContent = data.current.nitrogen_dioxide;

})
.catch(err => {

    alert(err);

});
