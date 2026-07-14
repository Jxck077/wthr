
const container=document.getElementById("weatherContainer");

async function loadWeather() {

    container.innerHTML = "";

    for (const city of provinces) {

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&hourly=precipitation_probability,cloudcover&timezone=auto`;

        try {

            const response = await fetch(url);
            const data = await response.json();

            const current = data.current_weather;

            const card = document.createElement("div");

            card.className = "weather-card";

            card.addEventListener("click", () => {
                showDetail(city, data);
            });

            card.innerHTML = `
                <h3>${city.name}</h3>

                <img src="${weatherIcon(current.weathercode)}">

                <h2>${current.temperature} °C</h2>

                <p>${weatherText(current.weathercode)}</p>
            `;

            card.onclick = () => showDetail(city, data);

            container.appendChild(card);

        } catch (err) {

            console.log(city.name, err);

        }

    }

}

loadWeather();

function weatherText(code){

switch(code){

case 0:return "ท้องฟ้าแจ่มใส";
case 1:return "แดดเป็นส่วนใหญ่";
case 2:return "เมฆบางส่วน";
case 3:return "เมฆมาก";
case 45:return "หมอก";
case 48:return "หมอกหนา";
case 51:return "ฝนปรอย";
case 61:return "ฝน";
case 63:return "ฝนปานกลาง";
case 65:return "ฝนหนัก";
case 80:return "ฝนตก";
case 95:return "พายุฝนฟ้าคะนอง";

default:return "ไม่ทราบ";

}

}

function weatherIcon(code){

    if(code==0){

        return "https://cdn-icons-png.flaticon.com/512/869/869869.png";

    }

    if(code<=3){

        return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";

    }

    if(code>=51){

        return "https://cdn-icons-png.flaticon.com/512/414/414927.png";

    }

    return "https://cdn-icons-png.flaticon.com/512/869/869869.png";

}

function showDetail(city,data){

    alert(
`${city.name}

อุณหภูมิ : ${data.current_weather.temperature} °C

ลม : ${data.current_weather.windspeed} km/h`
    );

}

function showDetail(city, data){

    const current = data.current_weather;

    document.getElementById("detail").innerHTML = `

        <h2>${city.name}</h2>

        <hr>

        <p><b>🌡 อุณหภูมิ :</b> ${current.temperature} °C</p>

        <p><b>☁ สภาพอากาศ :</b> ${weatherText(current.weathercode)}</p>

        <p><b>💨 ความเร็วลม :</b> ${current.windspeed} km/h</p>

        <p><b>🧭 ทิศทางลม :</b> ${current.winddirection}°</p>

        <p><b>🕒 เวลาอัปเดต :</b> ${current.time}</p>

    `;

    document.getElementById("modal").style.display="flex";

}

const modal = document.getElementById("modal");

const closeBtn = document.getElementById("close");

closeBtn.onclick = function(){

    modal.style.display = "none";

}

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

}