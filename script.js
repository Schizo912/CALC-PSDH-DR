const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbyAWEOT5RPUzOWYV4VIP4MxQEDFzXAGPdcuaUsVgDuxGy03hhXTbETJyrG7JCvByQSQ/exec";


const hhbkData = {
    "Kelompok Rotan Pulut":{
        "Rotan Pulut Merah": ["per ton", 1800000],
        "Rotan Pulut Putih": ["per ton", 1800000],
        "Rotan Lilin": ["per ton", 1800000],
        "Rotan Lacak": ["per ton", 1800000],
        "Rotan Datuk": ["per ton", 1800000]
      },
      "Kelompok Rotan Sega":{
        "Rotan Sega (Taman)": ["per ton", 635000],
        "Rotan Sega Air (Ronti)": ["per ton", 635000],
        "Rotan Sega Badak": ["per ton", 635000],
        "Rotan Irit/Jahab": ["per ton", 635000]
      },
      "Kelompok Rotan Lambang":{
        "Rotan Lambang": ["per ton", 910000],
        "Rotan Anduru": ["per ton", 910000],
        "Rotan Lita": ["per ton", 910000],
        "Rotan Sabutan": ["per ton", 910000],
        "Rotan Ampar Tikar": ["per ton", 910000],
        "Rotan Terumpu": ["per ton", 910000],
        "Rotan Jermasin": ["per ton", 910000]
      },
      "Kelompok Rotan Tohiti":{
        "Rotan Tohiti Diameters < 25 mm": ["per ton", 1150000],
        "Rotan Tohiti Diameter > 25 mm": ["per ton", 1500000]
      },
      "Kelompok Rotan Manau":{
        "Rotan Manau": ["per batang", 3000],
        "Rotan Manau Tikus": ["per batang", 3000],
        "Rotan Riang": ["per batang", 3000],
        "Rotan Manau Padi": ["per batang", 3000]
      },
      "Kelompok Rotan Semambu":{
        "Rotan Semambu": ["per batang", 1000],
        "Rotan Tabu-tabu": ["per batang", 2000],
        "Rotan Wilatung": ["per batang", 3000],
        "Rotan Nawi": ["per batang", 3000],
        "Rotan Dahan": ["per batang", 3000]
      },
      "Rotan Jenis Lain":{
        "Rotan Jenis Lainnya": ["per ton", 635000]
      },
      "Bambu Hutan":{
        "Bambu Apus": ["per batang", 5000],
        "Bambu Petung": ["per batang", 9000],
        "Bambu Milah": ["per batang", 6000],
        "Bambu Glontang": ["per batang", 6000],
        "Bambu Jenis Lainnya": ["per batang", 5000]
      },
      "Tebu dan Batang":{
        "Tebu": ["per ton", 500000],
        "Batang Kelapa / Kelapa Sawit": ["per m3", 80000],
        "Tual Sagu": ["per tual", 8000],
        "Nibung Bulat": ["per batang", 50000]
      },
      "Resin":{
        "Resin Mata Kucing": ["per ton", 6000000],
        "Resin Batu": ["per ton", 600000],
        "Resin Kopal": ["per ton", 450000],
        "Resin Pilau": ["per ton", 500000],
        "Resin Rasak": ["per ton", 300000],
        "Resin Daging": ["per ton", 200000],
        "Resin Gaharu": ["per kg", 400000],
        "Gubal Gaharu": ["per kg", 15000000],
        "Kemedangan": ["per kg", 1000000],
        "Kemenyan": ["per ton", 20000000],
        "Gambir": ["per ton", 3250000],
        "Penghasil Resin Lainnya": ["per ton", 500000]
      },
      "Kelompok Getah":{
        "Getah Jelutung": ["per ton", 1200000],
        "Getah Ketiau": ["per ton", 500000],
        "Getah Karet": ["per ton", 2500000],
        "Getah Hangkang": ["per ton", 50000],
        "Getah Sundik": ["per ton", 550000],
        "Getah Pinus": ["per ton", 700000],
        "Getah Lainnya": ["per ton", 500000]
      },
      "Kelompok Kulit Kayu":{
        "Acasia": ["per ton", 250000],
        "Bakau": ["per ton", 300000],
        "Kalapari": ["per ton", 150000],
        "Gelam": ["per ton", 100000],
        "Kayu Salaro": ["per ton", 150000],
        "Kayu Laut": ["per ton", 100000],
        "Kayu Lawang": ["per ton", 50000],
        "Kayu Kusarang": ["per ton", 100000],
        "Kayu Manis": ["per ton", 5000000],
        "Masoi": ["per ton", 27500000],
        "Nyirih": ["per ton", 400000],
        "Tangir": ["per ton", 100000],
        "Tinggi": ["per ton", 400000],
        "Tarok": ["per ton", 200000],
        "Soga": ["per ton", 150000],
        "Suka": ["per ton", 100000],
        "Pulosantan": ["per ton", 100000],
        "Gemor / Salampati": ["per ton", 200000],
        "Medang Keladi": ["per ton", 100000],
        "Kulit kayu hutan jenis lainnya": ["per ton", 325000]
      },
      "Kelompok Buah-buahan":{
        "Pala": ["per ton", 1700000],
        "Tandan buah sawit": ["per ton", 1300000],
        "Durian": ["per ton", 2000000],
        "Nangka": ["per ton", 2000000],
        "Cempedak": ["per ton", 2000000],
        "Buah merah": ["per ton", 27500000],
        "Cengkeh": ["per ton", 5000000],
        "Rotan": ["per ton", 2000000],
        "Rotan Jernang": ["per ton", 3000000],
        "Salak": ["per ton", 5000000],
        "Kepayang": ["per ton", 500000],
        "Cabai": ["per ton", 2500000],
        "Kelapa": ["per ton", 250000],
        "Lontar": ["per ton", 250000],
        "Aren / Kolang-Kaling": ["per ton", 250000],
        "Matoa": ["per ton", 2000000],
        "Manggis": ["per ton", 2000000],
        "Petai": ["per ton", 2000000],
        "Jengkol": ["per ton", 2000000],
        "Duku / Langsat": ["per ton", 2000000],
        "Pisang": ["per ton", 1000000],
        "Asam / Asan Jawa": ["per ton", 1000000],
        "Asam Kandis": ["per ton", 1000000],
        "Kedondong": ["per ton", 1000000],
        "Kakao": ["per ton", 1000000],
        "Sirsak": ["per ton", 1000000],
        "Vanili": ["per ton", 50000000],
        "Buah-buahan yang tidak tercantum di atas": ["per ton", 1000000]
      },
      "Kelompok Biji":{
        "Biji Tengkawang": ["per ton", 4000000],
        "Biji Kemiri": ["per ton", 12000000],
        "Mede/Mete": ["per ton", 9200000],
        "Kenari": ["per ton", 9200000],
        "Biga": ["per ton", 300000],
        "Asam": ["per ton", 300000],
        "Seed lac": ["per ton", 1100000],
        "Padi/Gabah": ["per ton", 2000000],
        "Jagung": ["per ton", 1000000],
        "Lada": ["per ton", 20000000],
        "Kopi Robusta /Jenis lainnya (dengan kulit)": ["per ton", 3500000],
        "Kopi Arabica (dengan kulit)": ["per ton", 4500000],
        "Biji-bijian Jenis lainnya yang tidak tercantum di atas": ["per ton", 500000]
      },
      "Kelompok Umbi":{
        "Umbi porang": ["per ton", 5000000],
        "Singkong/Ubi Jalar": ["per ton", 500000],
        "Talas": ["per ton", 500000],
        "Pasak bumi": ["per ton", 1000000],
        "Umbi-umbian yang tidak tercantum di atas": ["per ton", 500000]
      },
      "Kelompok Daun":{
        "Daun Kayu Putih": ["per ton", 250000],
        "Daun Cengkeh": ["per ton", 100000],
        "Rumput Gajah": ["per ton", 200000],
        "Daun Kaliandra": ["per ton", 100000],
        "Gamal": ["per ton", 200000],
        "Lamtoro": ["per ton", 200000],
        "Turi": ["per ton", 200000],
        "SerehSereh Wangi": ["per ton", 15000000],
        "Kratom": ["per ton", 4500000],
        "Kenaf": ["per ton", 4500000],
        "Nilam": ["per ton", 700000],
        "Daun-daunan Jenis lainnya": ["per ton", 100000]
      },
      "Kelompok Akar":{
        "Akar Lawang": ["per ton", 5000000],
        "Akar Wangi": ["per ton", 5000000],
        "Akar Pakanangi": ["per ton", 1400000],
        "Akar-akaran Jenis lainnya": ["per ton", 100000]
      },
      "Kelompok Lain-lain":{
        "Nibung Bulat": ["per batang", 50000],
        "Lilin Tawon": ["per ton", 2000000],
        "Madu": ["per liter", 50000],
        "Nira Nipah": ["per liter", 2000],
        "Ijuk": ["per ton", 500000],
        "Ketak": ["per ton", 550000],
        "Kokon Ulat Sutera": ["per ton", 10000000],
        "Sarang Burung Walet": ["per kg", 3000000]
      },

    };

 function isHHBKValid(val) {
  const options = Array.from(document.querySelectorAll('#hhbkList option')).map(o => o.value.trim());
  return options.includes(val.trim());
}

function updateSatuan() {
  const val = document.getElementById("hhbk").value.trim();
  let satuan = "", harga = 0, found = false;

  for (const kategori in hhbkData) {
    if (val in hhbkData[kategori]) {
      [satuan, harga] = hhbkData[kategori][val];
      found = true;
      break;
    }
  }

  if (found) {
    document.getElementById("satuan").value = satuan;
    document.getElementById("harga").value = harga.toLocaleString("id-ID");
  } else {
    document.getElementById("satuan").value = "";
    document.getElementById("harga").value = "";
  }
}

function saveData() {
  const hhbk = document.getElementById("hhbk").value;
  const satuan = document.getElementById("satuan").value;
  const jumlah = parseFloat(document.getElementById("jumlah").value);
  const harga = parseFloat(document.getElementById("harga").value.replace(/\./g, '').replace(/,/g, ''));
  const ijin = document.getElementById("ijin").value;

  if (!hhbk || !satuan || isNaN(jumlah) || isNaN(harga)) {
    alert("Lengkapi semua data terlebih dahulu!");
    return;
  }

  const data = {
    hhbk, satuan, jumlah, harga, ijin
  };

  fetch("https://script.google.com/macros/s/AKfycbyAWEOT5RPUzOWYV4VIP4MxQEDFzXAGPdcuaUsVgDuxGy03hhXTbETJyrG7JCvByQSQ/exec", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      document.getElementById("hasil").innerHTML = `
        <div class="hasil-box">Total PNBP: Rp ${result.tarif.toLocaleString('id-ID')}</div>
      `;
    })
    .catch(error => {
      console.error("Gagal menyimpan:", error);
      alert("Terjadi kesalahan saat menyimpan.");
    });
}

function clearResults() {
  document.getElementById("hasil").innerText = "";
  document.getElementById("hhbk").value = "";
  document.getElementById("satuan").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("ijin").value = "";
}
