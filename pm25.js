const provinces = [
    { name: "Nakhon Phanom", lat: 17.41, lon: 104.78 },
    { name: "Bangkok", lat: 13.75, lon: 100.50 },
    { name: "Chiang Mai", lat: 18.79, lon: 98.98 },
    { name: "Khon Kaen", lat: 16.43, lon: 102.83 },
    { name: "Phuket", lat: 7.88, lon: 98.39 },
    { name: "Udon Thani", lat: 17.41, lon: 102.79 }
];

const container = document.getElementById("pm-grid");

provinces.forEach(async province => {

    const url =
`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${province.lat}&longitude=${province.lon}&current=pm2_5`;

    const response = await fetch(url);
    const data = await response.json();

    const pm = data.current.pm2_5;

    container.innerHTML += `
        <div class="card"
            onclick="location.href='pm25-detail.html?lat=${province.lat}&lon=${province.lon}&name=${province.name}'">

            <h3>${province.name}</h3>

            <div class="pm">
                ${pm} μg/m³
            </div>

        </div>
    `;
});
