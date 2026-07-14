const provinces = [
  { name: "Bangkok", lat: 13.76, lon: 100.50 },
  { name: "Krabi", lat: 8.09, lon: 98.91 },
  { name: "Kanchanaburi", lat: 14.02, lon: 99.53 },
  { name: "Kalasin", lat: 16.44, lon: 103.51 },
  { name: "Kamphaeng Phet", lat: 16.48, lon: 99.52 },
  { name: "Khon Kaen", lat: 16.44, lon: 102.84 },
  { name: "Chanthaburi", lat: 12.61, lon: 102.10 },
  { name: "Chachoengsao", lat: 13.69, lon: 101.08 },
  { name: "Chonburi", lat: 13.36, lon: 100.98 },
  { name: "Chai Nat", lat: 15.19, lon: 100.13 },
  { name: "Chaiyaphum", lat: 15.81, lon: 102.03 },
  { name: "Chumphon", lat: 10.49, lon: 99.18 },
  { name: "Chiang Rai", lat: 19.91, lon: 99.84 },
  { name: "Chiang Mai", lat: 18.79, lon: 98.99 },
  { name: "Trang", lat: 7.56, lon: 99.61 },
  { name: "Trat", lat: 12.24, lon: 102.52 },
  { name: "Tak", lat: 16.88, lon: 99.13 },
  { name: "Nakhon Nayok", lat: 14.21, lon: 101.21 },
  { name: "Nakhon Pathom", lat: 13.82, lon: 100.04 },
  { name: "Nakhon Phanom", lat: 17.41, lon: 104.78 },
  { name: "Nakhon Ratchasima", lat: 14.97, lon: 102.08 },
  { name: "Nakhon Si Thammarat", lat: 8.43, lon: 99.96 },
  { name: "Nakhon Sawan", lat: 15.70, lon: 100.14 },
  { name: "Nonthaburi", lat: 13.86, lon: 100.49 },
  { name: "Narathiwat", lat: 6.43, lon: 101.83 },
  { name: "Nan", lat: 18.78, lon: 100.78 },
  { name: "Bueng Kan", lat: 18.36, lon: 103.65 },
  { name: "Buri Ram", lat: 14.99, lon: 103.10 },
  { name: "Pathum Thani", lat: 14.02, lon: 100.53 },
  { name: "Prachuap Khiri Khan", lat: 11.80, lon: 99.78 },
  { name: "Prachinburi", lat: 14.05, lon: 101.37 },
  { name: "Pattani", lat: 6.87, lon: 101.25 },
  { name: "Phra Nakhon Si Ayutthaya", lat: 14.35, lon: 100.57 },
  { name: "Phayao", lat: 19.17, lon: 99.90 },
  { name: "Phang Nga", lat: 8.45, lon: 98.53 },
  { name: "Phatthalung", lat: 7.62, lon: 100.08 },
  { name: "Phichit", lat: 16.44, lon: 100.35 },
  { name: "Phitsanulok", lat: 16.82, lon: 100.27 },
  { name: "Phetchaburi", lat: 13.11, lon: 99.94 },
  { name: "Phetchabun", lat: 16.42, lon: 101.16 },
  { name: "Phrae", lat: 18.14, lon: 100.14 },
  { name: "Phuket", lat: 7.88, lon: 98.39 },
  { name: "Maha Sarakham", lat: 16.19, lon: 103.30 },
  { name: "Mukdahan", lat: 16.54, lon: 104.71 },
  { name: "Mae Hong Son", lat: 19.30, lon: 97.97 },
  { name: "Yasothon", lat: 15.79, lon: 104.15 },
  { name: "Yala", lat: 6.54, lon: 101.28 },
  { name: "Roi Et", lat: 16.05, lon: 103.65 },
  { name: "Ranong", lat: 9.97, lon: 98.63 },
  { name: "Rayong", lat: 12.68, lon: 101.28 },
  { name: "Ratchaburi", lat: 13.53, lon: 99.81 },
  { name: "Lopburi", lat: 14.80, lon: 100.65 },
  { name: "Lampang", lat: 18.29, lon: 99.51 },
  { name: "Lamphun", lat: 18.57, lon: 99.01 },
  { name: "Loei", lat: 17.49, lon: 101.72 },
  { name: "Si Sa Ket", lat: 15.12, lon: 104.32 },
  { name: "Sakon Nakhon", lat: 17.15, lon: 104.15 },
  { name: "Songkhla", lat: 7.19, lon: 100.60 },
  { name: "Satun", lat: 6.62, lon: 100.07 },
  { name: "Samut Prakan", lat: 13.60, lon: 100.60 },
  { name: "Samut Songkhram", lat: 13.41, lon: 100.00 },
  { name: "Samut Sakhon", lat: 13.55, lon: 100.27 },
  { name: "Sa Kaeo", lat: 13.82, lon: 102.06 },
  { name: "Saraburi", lat: 14.53, lon: 100.91 },
  { name: "Sing Buri", lat: 14.89, lon: 100.40 },
  { name: "Sukhothai", lat: 17.01, lon: 99.83 },
  { name: "Suphan Buri", lat: 14.47, lon: 100.12 },
  { name: "Surat Thani", lat: 9.14, lon: 99.32 },
  { name: "Surin", lat: 14.88, lon: 103.49 },
  { name: "Nong Khai", lat: 17.88, lon: 102.74 },
  { name: "Nong Bua Lamphu", lat: 17.20, lon: 102.44 },
  { name: "Ang Thong", lat: 14.59, lon: 100.45 },
  { name: "Amnat Charoen", lat: 15.85, lon: 104.62 },
  { name: "Udon Thani", lat: 17.41, lon: 102.79 },
  { name: "Uttaradit", lat: 17.62, lon: 100.10 },
  { name: "Uthai Thani", lat: 15.38, lon: 100.02 },
  { name: "Ubon Ratchathani", lat: 15.23, lon: 104.86 }
];


const grid = document.getElementById("pm-grid");

async function loadPM25() {

    const grid = document.getElementById("pm-grid");

    for (const province of provinces) {

        try {

            const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${province.lat}&longitude=${province.lon}&current=pm2_5`;

            const res = await fetch(url);

            const data = await res.json();

            console.log(province.name, data);

            const pm = data.current?.pm2_5 ?? "N/A";

            grid.innerHTML += `
                <div class="card"
                    onclick="location.href='pm25-detail.html?lat=${province.lat}&lon=${province.lon}&name=${province.name}'">

                    <h3>${province.name}</h3>

                    <div class="pm">${pm} μg/m³</div>

                </div>
            `;

        } catch (err) {

            console.error("จังหวัดที่ผิดพลาด:", province.name, err);

        }

    }

}

loadPM25();
