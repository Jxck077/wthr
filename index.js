// -----------------------------
// จังหวัดที่ต้องการแสดง
// -----------------------------

const weatherData = [
    {
        name: "นครพนม",
        lat: 17.4108,
        lon: 104.7784
    },
    {
        name: "กรุงเทพฯ",
        lat: 13.7563,
        lon: 100.5018
    }
];

// โหลดข้อมูลเมื่อเปิดเว็บ
window.onload = () => {
    loadWeather();
    loadPM25();
};


// -----------------------------
// ดึงข้อมูลอากาศ
// -----------------------------

async function loadWeather(){

    for(let i=0;i<weatherData.length;i++){

        const city = weatherData[i];

        const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&hourly=precipitation_probability,cloudcover&timezone=auto`;

        try{

            const response = await fetch(url);

            const data = await response.json();

            showWeather(i,data);

        }
        catch(error){

            console.log(error);

        }

    }

}

function showWeather(index,data){

    const current = data.current_weather;

    document.getElementById("temp"+(index+1)).innerHTML =
        current.temperature + " °C";

    document.getElementById("status"+(index+1)).innerHTML =
        weatherText(current.weathercode);

    document.getElementById("weatherIcon"+(index+1)).src =
        weatherIcon(current.weathercode);

}

function weatherText(code){

    switch(code){

        case 0:
            return "ท้องฟ้าแจ่มใส";

        case 1:
            return "แดดเป็นส่วนใหญ่";

        case 2:
            return "เมฆบางส่วน";

        case 3:
            return "เมฆมาก";

        case 45:
            return "หมอก";

        case 48:
            return "หมอกน้ำแข็ง";

        case 51:
            return "ฝนปรอย";

        case 53:
            return "ฝนเล็กน้อย";

        case 55:
            return "ฝน";

        case 61:
            return "ฝน";

        case 63:
            return "ฝนปานกลาง";

        case 65:
            return "ฝนหนัก";

        case 80:
            return "ฝนตก";

        case 95:
            return "พายุฝนฟ้าคะนอง";

        default:
            return "ไม่ทราบ";

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

function openWeather(){

    window.location.href="weather.html";

}

function openPM25(){

    window.location.href="pm25.html";

}

