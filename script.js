const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbzcINujyipV6jyfuPVI-bLerePHhicZwV7-2mECLFavmVEcK5iO4PN_QZ0vLBOxDc09/exec";

const kelompokMap = {
  // MERANTI
  "Agathis": "MERANTI",
  "Balau": "MERANTI",
  "Balau Merah": "MERANTI",
  "Bangkirai": "MERANTI",
  "Belangeran": "MERANTI Belangeran",
  "Damar": "MERANTI",
  "Durian": "MERANTI",
  "Gia": "MERANTI",
  "Giam": "MERANTI Giam",
  "Jelutung": "MERANTI",
  "Kapur": "MERANTI",
  "Kapur Petanang": "MERANTI",
  "Kenari": "MERANTI",
  "Keruing": "MERANTI",
  "Ki Sereh": "MERANTI Ki Sereh",
  "Kulim": "MERANTI Kulim",
  "Lembasung": "MERANTI",
  "Malapari": "MERANTI",
  "Matoa": "MERANTI",
  "Medang (MR)": "MERANTI",
  "Meranti Batu": "MERANTI",
  "Meranti Kuning": "MERANTI",
  "Meranti Merah": "MERANTI",
  "Meranti Putih": "MERANTI",
  "Merawan": "MERANTI",
  "Merbau": "MERANTI Merbau",
  "Mersawa": "MERANTI",
  "Nyatoh": "MERANTI",
  "Palapi": "MERANTI",
  "Pelawan": "MERANTI",
  "Penjalin": "MERANTI",
  "Perupuk": "MERANTI Perupuk",
  "Pinang": "MERANTI",
  "Pulai": "MERANTI",
  "Rasamala": "MERANTI",
  "Resak": "MERANTI",
  "Sarangan Batu": "MERANTI",
  "Semantok": "MERANTI",
  "Kelompok Jenis Meranti lainnya": "MERANTI",

  // INDAH 1
  "Eboni Bergaris": "INDAH 1",
  "Eboni Hitam": "INDAH 1",
  "Eboni": "INDAH 1",
  "Jati": "INDAH 1 Jati",

  // INDAH 2
  "Bongin": "INDAH 2",
  "Bungur": "INDAH 2",
  "Cempaka": "INDAH 2",
  "Cempaka Alas": "INDAH 2",
  "Cempaka Jati": "INDAH 2",
  "Cendana Gubal": "INDAH 2 Cendana Gubal",
  "Cendana Teras": "INDAH 2 Cendana Teras",
  "Dahu": "INDAH 2",
  "Jati Seberang": "INDAH 2",
  "Johar": "INDAH 2",
  "Kendal": "INDAH 2",
  "Kihiyang": "INDAH 2",
  "Kuku": "INDAH 2",
  "Kupang": "INDAH 2",
  "Lasi": "INDAH 2",
  "Mahoni": "INDAH 2",
  "Melur": "INDAH 2",
  "Membacang": "INDAH 2",
  "Mentaos": "INDAH 2 Mentaos",
  "Mindi": "INDAH 2",
  "Nyirih": "INDAH 2",
  "Paru-Paru": "INDAH 2",
  "Pasang": "INDAH 2",
  "Perepat Darat": "INDAH 2",
  "Raja Bunga": "INDAH 2",
  "Ramin": "INDAH 2",
  "Rengas": "INDAH 2",
  "Rengas Burung": "INDAH 2",
  "Salimuli": "INDAH 2",
  "Santang": "INDAH 2",
  "Sawo Kecik": "INDAH 2",
  "Sempetir": "INDAH 2",
  "Sindur": "INDAH 2",
  "Sonobrits": "INDAH 2",
  "Sonokeling": "INDAH 2",
  "Sonokembang": "INDAH 2",
  "Sungkai": "INDAH 2",
  "Tanjung": "INDAH 2",
  "Tapos": "INDAH 2",
  "Tinjau Belukar": "INDAH 2",
  "Torem": "INDAH 2",
  "Trembesi": "INDAH 2",
  "Ulin": "INDAH 2",
  "Weru": "INDAH 2",
  "Kelompok Jenis INDAH 2 Lainnya": "INDAH 2",

  // RIMBA CAMPURAN
  "Acasia Auricoliformis": "RIMBA CAMPURAN",
  "Accasia Mangium": "RIMBA CAMPURAN",
  "Angsana": "RIMBA CAMPURAN",
  "Ara": "RIMBA CAMPURAN",
  "Asem-Asem": "RIMBA CAMPURAN",
  "Bakau": "RIMBA CAMPURAN",
  "Balsa": "RIMBA CAMPURAN",
  "Banggeris": "RIMBA CAMPURAN",
  "Banitan": "RIMBA CAMPURAN",
  "Bayur": "RIMBA CAMPURAN",
  "Bendo": "RIMBA CAMPURAN",
  "Benuang": "RIMBA CAMPURAN",
  "Berumbung": "RIMBA CAMPURAN",
  "Bintangur": "RIMBA CAMPURAN",
  "Bipa": "RIMBA CAMPURAN",
  "Bowoi": "RIMBA CAMPURAN",
  "Bugis": "RIMBA CAMPURAN",
  "Cemara": "RIMBA CAMPURAN",
  "Cenge": "RIMBA CAMPURAN",
  "Dara-dara": "RIMBA CAMPURAN",
  "Dlisem": "RIMBA CAMPURAN",
  "Duabanga": "RIMBA CAMPURAN",
  "Ekaliptus": "RIMBA CAMPURAN",
  "Flamboyan": "RIMBA CAMPURAN",
  "Gamal": "RIMBA CAMPURAN",
  "Gelam": "RIMBA CAMPURAN",
  "Gempol": "RIMBA CAMPURAN",
  "Gerunggang": "RIMBA CAMPURAN",
  "Gmelina": "RIMBA CAMPURAN",
  "Gopasa": "RIMBA CAMPURAN",
  "Jabon": "RIMBA CAMPURAN",
  "Jambu-jambu": "RIMBA CAMPURAN",
  "Jengkol": "RIMBA CAMPURAN",
  "Jering": "RIMBA CAMPURAN",
  "Juwet": "RIMBA CAMPURAN",
  "Kamiri": "RIMBA CAMPURAN",
  "Kapas-kapasan": "RIMBA CAMPURAN",
  "Karet": "RIMBA CAMPURAN",
  "Kayu Batu": "RIMBA CAMPURAN",
  "Kayu Kereta": "RIMBA CAMPURAN",
  "Kayu Kuning": "RIMBA CAMPURAN Kayu Kuning",
  "Kecapi": "RIMBA CAMPURAN",
  "Kecik": "RIMBA CAMPURAN",
  "Kedondong Hutan": "RIMBA CAMPURAN",
  "Kelempayan": "RIMBA CAMPURAN",
  "Kelumpang": "RIMBA CAMPURAN",
  "Kembang Semangkok": "RIMBA CAMPURAN",
  "Kempas": "RIMBA CAMPURAN",
  "Kenanga": "RIMBA CAMPURAN",
  "Kepoh": "RIMBA CAMPURAN",
  "Keranji": "RIMBA CAMPURAN",
  "Kesambi": "RIMBA CAMPURAN",
  "Ketangi": "RIMBA CAMPURAN",
  "Ketapang": "RIMBA CAMPURAN",
  "Ketimunan": "RIMBA CAMPURAN",
  "Klampis": "RIMBA CAMPURAN",
  "Lamtoro": "RIMBA CAMPURAN",
  "Lancat": "RIMBA CAMPURAN",
  "Lara": "RIMBA CAMPURAN",
  "Lokus": "RIMBA CAMPURAN",
  "Maesopsis": "RIMBA CAMPURAN",
  "Mahang": "RIMBA CAMPURAN",
  "Mangir": "RIMBA CAMPURAN",
  "Medang": "RIMBA CAMPURAN",
  "Melaleuca": "RIMBA CAMPURAN",
  "Mempisang": "RIMBA CAMPURAN",
  "Mendarahan": "RIMBA CAMPURAN",
  "Menjalin": "RIMBA CAMPURAN",
  "Mentibu": "RIMBA CAMPURAN",
  "Merambung": "RIMBA CAMPURAN",
  "Mimba/Mimbo": "RIMBA CAMPURAN",
  "Nangka": "RIMBA CAMPURAN",
  "Pasak linggo": "RIMBA CAMPURAN",
  "Pelawan": "RIMBA CAMPURAN",
  "Petai":"RIMBA CAMPURAN",
  "Pilang": "RIMBA CAMPURAN",
  "Pinus": "RIMBA CAMPURAN",
  "Punak": "RIMBA CAMPURAN",
  "Puspa": "RIMBA CAMPURAN",
  "Randu": "RIMBA CAMPURAN",
  "Rekisi": "RIMBA CAMPURAN",
  "Rengas Tembaga": "RIMBA CAMPURAN",
  "Salam": "RIMBA CAMPURAN",
  "Saninten": "RIMBA CAMPURAN",
  "Segawe": "RIMBA CAMPURAN",
  "Semangkok": "RIMBA CAMPURAN",
  "Sengon": "RIMBA CAMPURAN",
  "Sengon Buto/Jowo": "RIMBA CAMPURAN",
  "Sentang": "RIMBA CAMPURAN",
  "Sepat": "RIMBA CAMPURAN",
  "Sesendok": "RIMBA CAMPURAN",
  "Simpur": "RIMBA CAMPURAN",
  "Sogo": "RIMBA CAMPURAN",
  "Surian": "RIMBA CAMPURAN",
  "Tales": "RIMBA CAMPURAN",
  "Talok": "RIMBA CAMPURAN",
  "Tekik": "RIMBA CAMPURAN",
  "Tembesu": "RIMBA CAMPURAN",
  "Tempinis": "RIMBA CAMPURAN",
  "Tenggayun": "RIMBA CAMPURAN",
  "Tepis": "RIMBA CAMPURAN",
  "Terap": "RIMBA CAMPURAN",
  "Terentang": "RIMBA CAMPURAN",
  "Terentang Ayam": "RIMBA CAMPURAN",
  "Trenguli": "RIMBA CAMPURAN",
  "Utup": "RIMBA CAMPURAN",
  "Waru": "RIMBA CAMPURAN",
  "Winong": "RIMBA CAMPURAN",
  "Wunggu": "RIMBA CAMPURAN",
  "Kelompok Jenis Rimba Campuran Lainnya": "RIMBA CAMPURAN"
};

const provinsiToRegion = {
  "Aceh": "Sumatra",
  "Sumatera Utara": "Sumatra",
  "Sumatera Barat": "Sumatra",
  "Riau": "Sumatra",
  "Jambi": "Sumatra",
  "Sumatera Selatan": "Sumatra",
  "Bengkulu": "Sumatra",
  "Lampung": "Sumatra",
  "Kepulauan Bangka Belitung": "Sumatra",
  "Kepulauan Riau": "Sumatra",

  "DKI Jakarta": "Jawa dan Madura",
  "Jawa Barat": "Jawa dan Madura",
  "Jawa Tengah": "Jawa dan Madura",
  "DI Yogyakarta": "Jawa dan Madura",
  "Jawa Timur": "Jawa dan Madura",
  "Banten": "Jawa dan Madura",
  "Madura": "Jawa dan Madura", // if needed

  "Bali": "Bali dan Nusa Tenggara",
  "Nusa Tenggara Barat": "Bali dan Nusa Tenggara",
  "Nusa Tenggara Timur": "Bali dan Nusa Tenggara",

  "Kalimantan Barat": "Kalimantan",
  "Kalimantan Tengah": "Kalimantan",
  "Kalimantan Selatan": "Kalimantan",
  "Kalimantan Timur": "Kalimantan",
  "Kalimantan Utara": "Kalimantan",

  "Sulawesi Utara": "Sulawesi",
  "Sulawesi Tengah": "Sulawesi",
  "Sulawesi Selatan": "Sulawesi",
  "Sulawesi Tenggara": "Sulawesi",
  "Gorontalo": "Sulawesi",
  "Sulawesi Barat": "Sulawesi",

  "Maluku": "Maluku",
  "Maluku Utara": "Maluku",

  "Papua": "Papua",
  "Papua Barat": "Papua",
  "Papua Tengah": "Papua",
  "Papua Pegunungan": "Papua",
  "Papua Barat Daya": "Papua",
  "Papua Selatan": "Papua"
};

const hargaPatokan = {
  "Tumbuh Alami":{
    "Jawa dan Madura":{
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1000000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Sumatra":{
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 2000000, "KBS": 1000000, "KBK": 800000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Bali dan Nusa Tenggara":{
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Kalimantan":{
      "MERANTI": { "KBB": 810000, "KBS": 780000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 2000000, "KBS": 1000000, "KBK": 800000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 500000, "KBS": 480000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Sulawesi":{
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Maluku":{
      "MERANTI": { "KBB": 810000, "KBS": 780000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 2000000, "KBS": 1000000, "KBK": 800000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 500000, "KBS": 480000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Papua":{
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    }
  },
  "Budidaya":{
    "Jawa dan Madura":{
      override: {
        "Agathis": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Damar": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Rasamala": { "KBB": 280000, "KBS": 200000, "KBK": 140000 },
        "Mahoni": { "KBB": 580000, "KBS": 200000, "KBK": 130000 },
        "Sonobrits": { "KBB": 580000, "KBS": 200000, "KBK": 130000 },
        "Sonokeling": { "KBB": 1100000, "KBS": 760000, "KBK": 380000 },
        "Acasia Auricoliformis": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Accasia Mangium": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Balsa": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Ekaliptus": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Gmelina": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Karet": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Pinus": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Sengon": { "KBB": 200000, "KBS": 180000, "KBK": 130000 },
        "Sengon Buto/Jowo": { "KBB": 200000, "KBS": 180000, "KBK": 130000 }
      },
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1000000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 180000, "KBS": 130000, "KBK": 90000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Sumatra":{
      override: {
        "Sungkai": { "TBD": 150000 },
        "Acasia Auricoliformis": { "TBD": 140000 },
        "Accasia Mangium": { "TBD": 140000 },
        "Bakau": { "TBD": 135000 },
        "Balsa": { "TBD": 90000 },
        "Ekaliptus": { "TBD": 140000 },
        "Gmelina": { "TBD": 105000 },
        "Jabon": { "TBD": 140000 },
        "Karet": { "TBD": 150000 },
        "Pinus": { "TBD": 165000 },
        "Sengon": { "TBD": 165000 },
        "Sengon Buto/Jowo": { "TBD": 165000 },
        "Waru": { "TBD": 115000 }
      },
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 2000000, "KBS": 1000000, "KBK": 800000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Bali dan Nusa Tenggara":{
      override: {
        "Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
        "Sungkai": { "TBD": 150000 },
        "Acasia Auricoliformis": { "TBD": 140000 },
        "Accasia Mangium": { "TBD": 140000 },
        "Bakau": { "TBD": 135000 },
        "Balsa": { "TBD": 90000 },
        "Ekaliptus": { "TBD": 140000 },
        "Gmelina": { "TBD": 105000 },
        "Jabon": { "TBD": 140000 },
        "Karet": { "TBD": 150000 },
        "Pinus": { "TBD": 165000 },
        "Sengon": { "TBD": 165000 },
        "Sengon Buto/Jowo": { "TBD": 165000 },
        "Waru": { "TBD": 115000 }
      },
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Kalimantan":{
      override: {
        "Sungkai": { "TBD": 150000 },
        "Acasia Auricoliformis": { "TBD": 140000 },
        "Accasia Mangium": { "TBD": 140000 },
        "Bakau": { "TBD": 135000 },
        "Balsa": { "TBD": 90000 },
        "Ekaliptus": { "TBD": 140000 },
        "Gmelina": { "TBD": 105000 },
        "Jabon": { "TBD": 140000 },
        "Karet": { "TBD": 150000 },
        "Pinus": { "TBD": 165000 },
        "Sengon": { "TBD": 165000 },
        "Sengon Buto/Jowo": { "TBD": 165000 },
        "Waru": { "TBD": 115000 }
      },
      "MERANTI": { "KBB": 810000, "KBS": 780000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 2000000, "KBS": 1000000, "KBK": 800000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 500000, "KBS": 480000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Sulawesi":{
      override: {
        "Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
        "Sungkai": { "TBD": 150000 },
        "Acasia Auricoliformis": { "TBD": 140000 },
        "Accasia Mangium": { "TBD": 140000 },
        "Bakau": { "TBD": 135000 },
        "Balsa": { "TBD": 90000 },
        "Ekaliptus": { "TBD": 140000 },
        "Gmelina": { "TBD": 105000 },
        "Jabon": { "TBD": 140000 },
        "Karet": { "TBD": 150000 },
        "Sengon": { "TBD": 165000 },
        "Sengon Buto/Jowo": { "TBD": 165000 },
        "Waru": { "TBD": 115000 }
      },
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Maluku":{
      override: {
        "Sungkai": { "TBD": 150000 },
        "Acasia Auricoliformis": { "TBD": 140000 },
        "Accasia Mangium": { "TBD": 140000 },
        "Bakau": { "TBD": 135000 },
        "Balsa": { "TBD": 90000 },
        "Ekaliptus": { "TBD": 140000 },
        "Gmelina": { "TBD": 105000 },
        "Jabon": { "TBD": 140000 },
        "Karet": { "TBD": 150000 },
        "Pinus": { "TBD": 165000 },
        "Sengon": { "TBD": 165000 },
        "Sengon Buto/Jowo": { "TBD": 165000 },
        "Waru": { "TBD": 115000 }
      },
      "MERANTI": { "KBB": 810000, "KBS": 780000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 2000000, "KBS": 1000000, "KBK": 800000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 500000, "KBS": 480000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
    "Papua":{
      override: {
        "Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
        "Sungkai": { "TBD": 150000 },
        "Acasia Auricoliformis": { "TBD": 140000 },
        "Accasia Mangium": { "TBD": 140000 },
        "Bakau": { "TBD": 135000 },
        "Balsa": { "TBD": 90000 },
        "Ekaliptus": { "TBD": 140000 },
        "Gmelina": { "TBD": 105000 },
        "Jabon": { "TBD": 140000 },
        "Karet": { "TBD": 150000 },
        "Pinus": { "TBD": 165000 },
        "Sengon": { "TBD": 165000 },
        "Sengon Buto/Jowo": { "TBD": 165000 },
        "Waru": { "TBD": 115000 }
      },
      "MERANTI": { "KBB": 690000, "KBS": 670000, "KBK": 310000 },
      "MERANTI Merbau": { "TBD": 1850000 },
      "MERANTI Belangeran": { "TBD": 810000 },
      "MERANTI Giam": { "TBD": 810000 },
      "MERANTI Ki Sereh": { "TBD": 810000 },
      "MERANTI Kulim": { "TBD": 810000 },
      "MERANTI Perupuk": { "TBD": 810000 },
      "INDAH 1": { "TBD": 9200000 },
      "INDAH 1 Jati": { "KBB": 3500000, "KBS": 1900000, "KBK": 1200000 },
      "INDAH 2": { "TBD": 1550000 },
      "INDAH 2 Cendana Gubal": { "TBD": 1100000 },
      "INDAH 2 Cendana Teras": { "TBD": 10650000 },
      "INDAH 2 Mentaos": { "TBD": 810000 },
      "RIMBA CAMPURAN": { "KBB": 390000, "KBS": 370000, "KBK": 310000 },
      "RIMBA CAMPURAN Kayu Kuning": { "TBD": 760000 }
    },
  }
};

const daftarDenda = {
  "kontainer2": [
    ["Tidak Melaksanakan Penatausahaan Hasil Hutan dengan Benar", 10],
    ["Tidak Melakukan Pengukuran atau Pengujian Hasil Hutan sesuai Ketentuan Perundang-undangan", 10],
    ["Menebang Pohon yang Melebihi Toleransi Target Sebesar 5% dari Total Target Volume yang Ditentukan dalam RKT ", 10],
    ["Menebang Pohon yang Melebihi Toleransi Target Sebesar 3% dari Total Target Volume yang Ditentukan dalam RKT", 10],
    ["Menebang Pohon Sebelum RKT Disahkan", 15],
    ["Menebang Pohon untuk Pembuatan Koridor sebelum Ada Persetujuan Atau Tidak Sesuai Dengan Persetujuan Pembuatan Koridor", 15],
    ["Menebang Pohon Di Bawah Batas Diameter yang Diizinkan", 15],
    ["Menebang Pohon Di Luar Blok Tebangan yang Diizinkan", 15],
    ["Menebang Pohon untuk Pembuatan Jalan bagi Lintasan Angkutan Kayu Di Luar Blok RKT, kecuali dengan Persetujuan dari Pejabat yang Berwenang", 15],
    ["Menebang Pohon yang Dilindungi, Kecuali dengan Persetujuan dari Pejabat yang Berwenang", 15],
    ["Memanen atau Memungut Hasil Hutan yang Melebihi Daya Dukung Hutan Yaitu 5% dari Target Volume Per Jenis Hasil Hutan yang Diizinkan", 10],
    ["Tidak Melakukan Pengukuran atau Pengujian Hasil Hutan Sesuai Ketentuan Peraturan Perundang-undangan", 10]
  ],
  "kontainer3": [
    ["Tidak Melaksanakan Penatausahaan Hasil Hutan dengan Benar", 10],
    ["Tidak Melakukan Pengukuran atau Pengujian Hasil Hutan sesuai Ketentuan Perundangundangan", 10],
    ["Memanen atau Memungut Hasil Hutan yang Melebihi Daya Dukung Hutan Yaitu 5% dari Target Volume Per Jenis Hasil Hutan yang Diizinkan", 10],
    ["Tidak Melakukan Pengukuran atau Pengujian Hasil Hutan Sesuai Ketentuan Peraturan Perundang-undangan", 10],
    ["Menebang Pohon untuk Pembuatan Koridor Sebelum Ada Persetujuan atau Tidak Sesuai dengan Persetujuan Pembuatan Koridor", 15]
  ],
  "kontainer4": [
    ["Tidak Melaksanakan Penatausahaan Hasil Hutan dengan Benar", 10],
    ["Tidak Melakukan Pengukuran atau Pengujian Hasil Hutan sesuai Ketentuan Perundangundangan", 10],
    ["Memanen atau Memungut Hasil Hutan yang Melebihi Daya Dukung Hutan Yaitu 5% dari Target Volume Per Jenis Hasil Hutan yang Diizinkan", 10],
    ["Tidak Melakukan Pengukuran atau Pengujian Hasil Hutan Sesuai Ketentuan Peraturan Perundang-undangan", 10],
    ["Menebang Pohon untuk Pembuatan Koridor Sebelum Ada Persetujuan atau Tidak Sesuai dengan Persetujuan Pembuatan Koridor", 15]
  ]
};

function lanjutKontainer() {
  const namaPelakuUsaha = document.getElementById('namaPelakuUsaha').value;
  const provinsi = document.getElementById('provinsi').value;
  const asalKayu = document.getElementById('asalKayu').value;
  const jenisPerizinan = document.getElementById('jenisPerizinan').value;
  const region = provinsiToRegion[provinsi] || "Jawa dan Madura"; // Default fallback

  if (!namaPelakuUsaha || !asalKayu || !jenisPerizinan || !provinsi) {
    alert("Lengkapi semua isian identitas.");
    return;
  }

  let targetKontainer = '';
  if (asalKayu === 'Tumbuh Alami') {
    targetKontainer = 'kontainer2';
  } else if (asalKayu === 'Budidaya' && jenisPerizinan === 'PS') {
    targetKontainer = 'kontainer4';
  } else {
    targetKontainer = 'kontainer3';
  }

  // Simpan semua data ke dalam metadata global
  window.metadata = {
    namaPelakuUsaha,
    provinsi,
    region,
    asalKayu,
    jenisPerizinan,
    kontainer: targetKontainer
  };

  document.getElementById('kontainerIdentitas').style.display = 'none';
  document.getElementById('btnLanjut').style.display = 'none';

  renderKontainer(targetKontainer);
}

function renderKontainer(kode) {
  const meta = window.metadata;
  const container = document.getElementById("kontainerInput");

  let html = `
  <fieldset><legend>Informasi Pelaku Usaha</legend>
  <b>Nama:</b> ${meta.namaPelakuUsaha}<br>
  <b>Provinsi:</b> ${meta.provinsi}<br>
  <b>Region:</b> ${meta.region}<br>
  <b>Asal Kayu:</b> ${meta.asalKayu}<br>
  <b>Jenis Perizinan:</b> ${meta.jenisPerizinan}<br>
  </fieldset><br>

  <div class="table-scroll">
    <table border='1'>
      <thead>
        <tr>
          <th>Nama Tanaman</th>
          <th>Diameter (cm)</th>
          <th>Tinggi Bebas Cabang (m)</th>
          <th>Volume (m3)</th>
          <th>Kelompok Jenis</th>
          <th>Sortimen</th>
          <th>PSDH (Rp)</th>
          <th>DR (Rp)</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody id='inputBody'></tbody>
      <tfoot>
        <tr>
          <td colspan="6" style="text-align:right;"><b>Total:</b></td>
          <td><input id="totalPsdh" type="text" readonly style="text-align:center;"></td>
          <td><input id="totalDr" type="text" readonly style="text-align:center;"></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div> <!-- Ini menutup table-scroll, tombol2 di bawahnya tidak ikut scroll -->

  <div class="button-row">
    <button onclick='tambahBaris()'>+ Tambah Baris</button>
    <button onclick='simpanData()'>KALKULASI REKAPAN & DOWNLOAD CSV PSDH-DR</button>
  </div>

  <div id="rekapSederhana" class="rekap-box" style="display: none; margin-bottom:18px"></div>

  <hr style="margin:18px 0; width:90%; margin-left:auto; margin-right:auto;">

  <div class="button-row">
    <button onclick="tampilkanDenda()">Hitung Denda</button>
    <button id="btnDownloadDenda" onclick="downloadCSV_Denda()" style="display:none;">Download CSV Perhitungan Denda</button>
    <button onclick="kembaliKeKontainer1()">Kembali</button>
  </div>

  <div id="daftarDenda" style="display:none; margin-top:10px;"></div>
  <div id="totalDenda" style="display:none; font-weight:bold; margin-top:5px;"></div>
  <div id="rekapDendaTable" style="margin-top:20px; display:none;"></div>
`;


  container.innerHTML = html;
  tambahBaris();
  document.getElementById('kontainerInput').style.display = 'block';
}


function tambahBaris() {
  const tbody = document.getElementById("inputBody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
    <input list="namaList" class="namaTanaman" onchange="validasiNamaTanaman(this); updateBaris(this)">

    <datalist id="namaList">

  <option value="MERANTI --------------------">
  <option value="Agathis">
  <option value="Balau">
  <option value="Balau Merah">
  <option value="Bangkirai">
  <option value="Belangeran">
  <option value="Damar">
  <option value="Durian">
  <option value="Gia">
  <option value="Giam">
  <option value="Jelutung">
  <option value="Kapur">
  <option value="Kapur Petanang">
  <option value="Kenari">
  <option value="Keruing">
  <option value="Ki Sereh">
  <option value="Kulim">
  <option value="Lembasung">
  <option value="Malapari">
  <option value="Matoa">
  <option value="Medang (MR)">
  <option value="Meranti Batu">
  <option value="Meranti Kuning">
  <option value="Meranti Merah">
  <option value="Meranti Putih">
  <option value="Merawan">
  <option value="Merbau">
  <option value="Mersawa">
  <option value="Nyatoh">
  <option value="Palapi">
  <option value="Pelawan">
  <option value="Penjalin">
  <option value="Perupuk">
  <option value="Pinang">
  <option value="Pulai">
  <option value="Rasamala">
  <option value="Resak">
  <option value="Sarangan Batu">
  <option value="Semantok">
  <option value="Kelompok Jenis Meranti lainnya">
  <option value="INDAH 1 --------------------">
  <option value="Eboni Bergaris">
  <option value="Eboni Hitam">
  <option value="Eboni">
  <option value="Jati">
  <option value="INDAH 2 --------------------">
  <option value="Bongin">
  <option value="Bungur">
  <option value="Cempaka">
  <option value="Cempaka Alas">
  <option value="Cempaka Jati">
  <option value="Cendana Gubal">
  <option value="Cendana Teras">
  <option value="Dahu">
  <option value="Jati Seberang">
  <option value="Johar">
  <option value="Kendal">
  <option value="Kihiyang">
  <option value="Kuku">
  <option value="Kupang">
  <option value="Lasi">
  <option value="Mahoni">
  <option value="Melur">
  <option value="Membacang">
  <option value="Mentaos">
  <option value="Mindi">
  <option value="Nyirih">
  <option value="Paru-Paru">
  <option value="Pasang">
  <option value="Perepat Darat">
  <option value="Raja Bunga">
  <option value="Ramin">
  <option value="Rengas">
  <option value="Rengas Burung">
  <option value="Salimuli">
  <option value="Santang">
  <option value="Sawo Kecik">
  <option value="Sempetir">
  <option value="Sindur">
  <option value="Sonobrits">
  <option value="Sonokeling">
  <option value="Sonokembang">
  <option value="Sungkai">
  <option value="Tanjung">
  <option value="Tapos">
  <option value="Tinjau Belukar">
  <option value="Torem">
  <option value="Trembesi">
  <option value="Ulin">
  <option value="Weru">
  <option value="Kelompok Jenis INDAH 2 Lainnya">
  <option value="RIMBA CAMPURAN --------------------">
  <option value="Acasia Auricoliformis">
  <option value="Accasia Mangium">
  <option value="Angsana">
  <option value="Ara">
  <option value="Asem-Asem">
  <option value="Bakau">
  <option value="Balsa">
  <option value="Banggeris">
  <option value="Banitan">
  <option value="Bayur">
  <option value="Bendo">
  <option value="Benuang">
  <option value="Berumbung">
  <option value="Bintangur">
  <option value="Bipa">
  <option value="Bowoi">
  <option value="Bugis">
  <option value="Cemara">
  <option value="Cenge">
  <option value="Dara-dara">
  <option value="Dlisem">
  <option value="Duabanga">
  <option value="Ekaliptus">
  <option value="Flamboyan">
  <option value="Gamal">
  <option value="Gelam">
  <option value="Gempol">
  <option value="Gerunggang">
  <option value="Gmelina">
  <option value="Gopasa">
  <option value="Jabon">
  <option value="Jambu-jambu">
  <option value="Jengkol">
  <option value="Jering">
  <option value="Juwet">
  <option value="Kamiri">
  <option value="Kapas-kapasan">
  <option value="Karet">
  <option value="Kayu Batu">
  <option value="Kayu Kereta">
  <option value="Kayu Kuning">
  <option value="Kecapi">
  <option value="Kecik">
  <option value="Kedondong Hutan">
  <option value="Kelempayan">
  <option value="Kelumpang">
  <option value="Kembang Semangkok">
  <option value="Kempas">
  <option value="Kenanga">
  <option value="Kepoh">
  <option value="Keranji">
  <option value="Kesambi">
  <option value="Ketangi">
  <option value="Ketapang">
  <option value="Ketimunan">
  <option value="Klampis">
  <option value="Lamtoro">
  <option value="Lancat">
  <option value="Lara">
  <option value="Lokus">
  <option value="Maesopsis">
  <option value="Mahang">
  <option value="Mangir">
  <option value="Medang">
  <option value="Melaleuca">
  <option value="Mempisang">
  <option value="Mendarahan">
  <option value="Menjalin">
  <option value="Mentibu">
  <option value="Merambung">
  <option value="Mimba/Mimbo">
  <option value="Nangka">
  <option value="Pasak linggo">
  <option value="Pelawan">
  <option value="Petai">
  <option value="Pilang">
  <option value="Pinus">
  <option value="Pule">
  <option value="Punak">
  <option value="Puspa">
  <option value="Randu">
  <option value="Rekisi">
  <option value="Rengas Tembaga">
  <option value="Salam">
  <option value="Saninten">
  <option value="Segawe">
  <option value="Semangkok">
  <option value="Sengon">
  <option value="Sengon Buto/Jowo">
  <option value="Sentang">
  <option value="Sepat">
  <option value="Sesendok">
  <option value="Simpur">
  <option value="Sogo">
  <option value="Surian">
  <option value="Tales">
  <option value="Talok">
  <option value="Tekik">
  <option value="Tembesu">
  <option value="Tempinis">
  <option value="Tenggayun">
  <option value="Tepis">
  <option value="Terap">
  <option value="Terentang">
  <option value="Terentang Ayam">
  <option value="Trenguli">
  <option value="Utup">
  <option value="Waru">
  <option value="Winong">
  <option value="Wunggu">
  <option value="Kelompok Jenis Rimba Campuran Lainnya">
  </optgroup>
</datalist>


    </select>
    </td>
    <td><input type='number' class='diameter' oninput='updateBaris(this)'></td>
    <td><input type='number' class='tbc' oninput='updateBaris(this)'></td>
    <td><input type='number' class='volume' readonly></td>
    <td><input type='text' class='kelompokJenis' readonly></td>
    <td><input type='text' class='sortimen' readonly></td>
    <td><input type='text' class='psdh' readonly></td>
    <td><input type='text' class='dr' readonly></td>
    <td><button onclick='this.parentElement.parentElement.remove()'>Hapus</button></td>
  `;
  tbody.appendChild(tr);

  updateTotal();

  document.querySelector("button[onclick='tambahBaris()']").disabled = !validasiBarisTerakhir();
}

function validasiNamaTanaman(input) {
  const val = input.value.trim();
  const datalist = document.getElementById("namaList");
  const daftarValid = Array.from(datalist.options).map(opt => opt.value);

  // Cek apakah input cocok dengan salah satu value di datalist
  const valid = daftarValid.includes(val);

  // Tambahkan pengecualian: value yang mengandung separator tidak boleh dipilih
  const isSeparator = val.includes("--------------------");

  if (!valid || isSeparator) {
    alert("Silakan pilih nama tanaman yang valid dari daftar.");
    input.value = "";
    input.focus();
  }
}

function updateBaris(el) {
  const invalidChoices = [
  "MERANTI --------------------",
  "INDAH 1 --------------------",
  "INDAH 2 --------------------",
  "RIMBA CAMPURAN --------------------",
  ];
  
  const val = el.value.trim();
  if (invalidChoices.includes(val)) {
    alert("Silakan pilih nama tanaman yang valid.");
    el.value = "";
    return;
  }

  const row = el.closest("tr");
  const nama = row.querySelector('.namaTanaman').value.trim();
  const d = parseFloat(row.querySelector('.diameter').value);
  const t = parseFloat(row.querySelector('.tbc').value);
  if (!nama || isNaN(d) || isNaN(t)) return;

  // Tentukan kelompok jenis berdasarkan nama
  const kelompok = Object.keys(kelompokMap).find(k => k.toLowerCase() === nama.toLowerCase());
  const kelompokJenis = kelompokMap[kelompok] || "RIMBA CAMPURAN";

  // ❗️Tampilkan hanya 4 kategori utama dalam tabel
  let kelompokUtama = "RIMBA CAMPURAN";
  if (kelompokJenis.includes("MERANTI")) {
    kelompokUtama = "MERANTI";
  } else if (kelompokJenis.includes("INDAH 1")) {
    kelompokUtama = "INDAH 1";
  } else if (kelompokJenis.includes("INDAH 2")) {
    kelompokUtama = "INDAH 2";
  }

  // Deteksi apakah jenis ini masuk kategori TBD
  const isTBD = /(MERANTI (Belangeran|Giam|Ki Sereh|Kulim|Merbau|Perupuk))|INDAH(?! I Jati)|Cendana|Mentaos|Kayu Kuning/.test(kelompokJenis);

  // Tentukan sortimen
  let sortimen = "TBD";
  if (!isTBD || kelompokJenis === "INDAH 1 Jati") {
    sortimen = d < 20 ? "KBK" : (d < 30 ? "KBS" : "KBB");
  }

  // Hitung volume
  const vol = Math.round(hitungVolume(d, t) * 100) / 100;

  // Ambil metadata
  const kontainer = window.metadata.kontainer;
  const perizinan = window.metadata.jenisPerizinan;
  const asalKayu = window.metadata.asalKayu;

  const provinsi = document.getElementById("provinsi")?.value || "Jawa Timur";
  const wilayah = provinsiToRegion[provinsi] || "Jawa dan Madura";

  const kelompokData = hargaPatokan[asalKayu]?.[wilayah] || {};
  const overrideData = kelompokData.override || {};

  let harga = 0;
  if (overrideData[nama]) {
    harga = overrideData[nama][sortimen] || overrideData[nama].TBD || 0;
  } else {
    harga = kelompokData[kelompokJenis]?.[sortimen] || kelompokData[kelompokJenis]?.TBD || 0;
  }

  // Hitung tarif PSDH dan DR
  let psdhRate = 0, drRate = 0;

  if (kontainer === 'kontainer2') {
    psdhRate = 0.10;

    if (["PBPH", "PS"].includes(perizinan)) {
      if (kelompokJenis === "INDAH 1 Jati") {
        drRate = 0.20;
      } else if (isTBD) {
        if (/Belangeran|Giam|Ki Sereh|Kulim|Perupuk/.test(kelompokJenis)) drRate = 0.32;
        else if (/Merbau/.test(kelompokJenis)) drRate = 0.13;
        else if (/Cendana Gubal/.test(kelompokJenis)) drRate = 0.025;
        else if (/Cendana Teras/.test(kelompokJenis)) drRate = 0.025;
        else if (/INDAH 2 Mentaos/.test(kelompokJenis)) drRate = 0.32;
        else if (/INDAH 1$/.test(kelompokJenis)) drRate = 0.035;
        else drRate = 0.17;
      } else {
        drRate = (sortimen === "KBK") ? 0.08 : 0.30;
      }
    } else {
      if (kelompokJenis === "INDAH 1 Jati") {
        drRate = 0.33;
      } else if (isTBD) {
        if (/Belangeran|Giam|Ki Sereh|Kulim|Perupuk/.test(kelompokJenis)) drRate = 0.53;
        else if (/Merbau/.test(kelompokJenis)) drRate = 0.22;
        else if (/Cendana Gubal/.test(kelompokJenis)) drRate = 0.04;
        else if (/Cendana Teras/.test(kelompokJenis)) drRate = 0.04;
        else if (/INDAH 2 Mentaos/.test(kelompokJenis)) drRate = 0.53;
        else if (/INDAH 1$/.test(kelompokJenis)) drRate = 0.06;
        else drRate = 0.28;
      } else {
        drRate = (sortimen === "KBK") ? 0.13 : 0.50;
      }
    }
  } else if (kontainer === 'kontainer3') {
    psdhRate = 0.06;
    drRate = 0;
  } else if (kontainer === 'kontainer4') {
    psdhRate = 0.03;
    drRate = 0;
  }

   const psdhValue = Math.round(vol * harga * psdhRate);
  const drValue = Math.round(vol * harga * drRate);

  // Update nilai ke kolom input
  row.querySelector('.volume').value = vol.toFixed(2);
  row.querySelector('.kelompokJenis').value = kelompokUtama; // ✅ Gunakan kelompok yang sudah disederhanakan
  row.querySelector('.sortimen').value = sortimen;
  row.querySelector('.psdh').value = psdhValue.toLocaleString('id-ID');
  row.querySelector('.dr').value = drValue.toLocaleString('id-ID');

  updateTotal();  
  if (typeof validasiBarisTerakhir === 'function') {
  const btn = document.querySelector("button[onclick='tambahBaris()']");
  if (btn) btn.disabled = !validasiBarisTerakhir();
}

}

function updateTotal() {
  let totalPsdh = 0;
  let totalDr = 0;
  let totalVolume = 0;

  document.querySelectorAll("#inputBody tr").forEach(row => {
    const psdh = parseInt(row.querySelector('.psdh').value.replace(/\D/g, '')) || 0;
    const dr = parseInt(row.querySelector('.dr').value.replace(/\D/g, '')) || 0;
    const vol = parseFloat(row.querySelector('.volume').value) || 0;

    totalPsdh += psdh;
    totalDr += dr;
    totalVolume += vol;
  });

  document.getElementById("totalPsdh").value = totalPsdh.toLocaleString('id-ID');
  document.getElementById("totalDr").value = totalDr.toLocaleString('id-ID');
  
}

function simpanData() {
  try {
    const tbody = document.getElementById('inputBody');
    const rows = tbody.querySelectorAll('tr');
    const data = [];

    let totalPsdh = 0;
    let totalDr = 0;
    let totalVolume = 0;

    rows.forEach(row => {
      const namaTanamanEl = row.querySelector('.namaTanaman');
      const diameterEl = row.querySelector('.diameter');
      const tbcEl = row.querySelector('.tbc');
      const volumeEl = row.querySelector('.volume');
      const kelompokEl = row.querySelector('.kelompokJenis');
      const sortimenEl = row.querySelector('.sortimen');
      const psdhEl = row.querySelector('.psdh');
      const drEl = row.querySelector('.dr');

      if (!namaTanamanEl || !diameterEl || !tbcEl || !volumeEl || !psdhEl || !drEl) return;

      const volume = parseFloat(volumeEl.value) || 0;
      const psdh = parseFloat(psdhEl.value.replace(/[^\d]/g, '')) || 0;
      const dr = parseFloat(drEl.value.replace(/[^\d]/g, '')) || 0;

      totalVolume += volume;
      totalPsdh += psdh;
      totalDr += dr;

      data.push({
        ...window.metadata,
        namaTanaman: namaTanamanEl.value || '',
        diameter: parseFloat(diameterEl.value) || 0,
        tbc: parseFloat(tbcEl.value) || 0,
        volume,
        kelompokJenis: kelompokEl?.value || '',
        sortimen: sortimenEl?.value || '',
        psdh,
        dr,
      });
    });

    if (data.length === 0) {
      alert("Tidak ada data yang dapat disimpan.");
      return;
    }

    const totalPohon = data.length;
    const totalNilai = totalPsdh + totalDr;

     downloadCSV_PSDHDR(data);  
    // ✅ Tampilkan rekap setelah tombol simpan ditekan
    const rekapDiv = document.getElementById("rekapSederhana");
    if (rekapDiv) {
      rekapDiv.innerHTML = `
        <p><b>Total Pohon:</b> ${totalPohon} &nbsp; | 
        <b>Total Volume:</b> ${totalVolume.toFixed(2)} m³ &nbsp; | 
        <b>Total (PSDH + DR):</b> Rp ${totalNilai.toLocaleString('id-ID')}</p>
      `;
       rekapDiv.style.display = "block"; // ✅ Tampilkan hanya setelah simpan
    }

    console.log('Data yang akan dikirim:', data);

    fetch(GAS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "prosesPerhitungan",
        data: data
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data yang diterima dari server:', data);
      showHasil(data);
    })
    .catch(error => {
      console.error("Terjadi kesalahan:", error);
    });

  } catch (error) {
    console.error("Error di simpanData:", error);
  }
}

function tampilkanDenda() {
  const kontainer = window.metadata.kontainer;
  const dendaList = daftarDenda[kontainer] || [];

  const wrapper = document.getElementById("daftarDenda");
  wrapper.innerHTML = `
    <div style="font-weight:bold; color:#5c3d00; margin-bottom:10px;">Pilih Satu Jenis Pelanggaran:</div>
    <table style="width:100%; border-collapse:collapse;">
      <tbody>
        ${dendaList.map((item, idx) => `
          <tr style="vertical-align:top;">
            <td style="width:30px; padding-top:6px;">
              <input type="radio" id="radio-${idx}" name="radio-denda" value="${item[1]}" onchange="hitungTotalDenda(this)">
            </td>
            <td style="padding:6px 0; color:#5c3d00; font-size:14px; line-height:1.4;text-align: left;">
              <label for="radio-${idx}">${item[0]} <span style="color:#997000;">(x${item[1]} PSDH)</span></label>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  wrapper.style.display = "block";
}



function hitungTotalDenda(radio) {
  const faktor = parseInt(radio.value);
  const totalPsdhRaw = document.getElementById("totalPsdh").value.replace(/\D/g, '') || "0";
  const totalPsdh = parseInt(totalPsdhRaw);

  const totalDenda = faktor * totalPsdh;

  // Hapus total denda atas
  const div = document.getElementById("totalDenda");
  div.innerHTML = "";
  div.style.display = "none";


  // ✅ Ambil teks label pelanggaran secara benar
  const label = document.querySelector(`label[for="${radio.id}"]`);
  window.metadata.pelanggaran = label?.innerText.trim() || "-";

  tampilkanRekapDenda(faktor);
}




function tampilkanRekapDenda(faktor) {
  const tbody = document.getElementById('inputBody');
  const rows = tbody.querySelectorAll('tr');
  const rekapContainer = document.getElementById('rekapDendaTable');

  let totalVol = 0, totalPsdh = 0, totalDr = 0, totalDenda = 0, totalSemua = 0;

  let table = `
  <h3 style="color:#000000; margin-bottom:10px; text-align:center;">PERHITUNGAN PSDH - DR & DENDA</h3>
  <div style="max-height:400px; overflow-y:auto;">
    <table border="1" style="border-collapse: collapse; width: 100%;">
      <thead style="position:sticky; top:0; background:#f0f0f0; z-index:1;">
        <tr>
          <th>No</th>
          <th>Nama Tanaman</th>
          <th>Volume (m³)</th>
          <th>Kelompok</th>
          <th>Sortimen</th>
          <th>PSDH (Rp)</th>
          <th>DR (Rp)</th>
          <th>x PSDH</th>
          <th>Denda (Rp)</th>
          <th>Total Keseluruhan (Rp)</th>
        </tr>
      </thead>
      <tbody>
`;


  rows.forEach((row, index) => {
    const nama = row.querySelector('.namaTanaman')?.value || "-";
    const vol = parseFloat(row.querySelector('.volume')?.value) || 0;
    const kelompok = row.querySelector('.kelompokJenis')?.value || "-";
    const sortimen = row.querySelector('.sortimen')?.value || "-";
    const psdh = parseInt(row.querySelector('.psdh')?.value.replace(/\D/g, '')) || 0;
    const dr = parseInt(row.querySelector('.dr')?.value.replace(/\D/g, '')) || 0;
    const denda = faktor * psdh;
    const totalBaris = psdh + dr + denda;

    totalVol += vol;
    totalPsdh += psdh;
    totalDr += dr;
    totalDenda += denda;
    totalSemua += totalBaris;

    table += `
      <tr>
        <td>${index + 1}</td>
        <td>${nama}</td>
        <td>${vol.toFixed(2).replace('.', ',')}</td>
        <td>${kelompok}</td>
        <td>${sortimen}</td>
        <td>${psdh.toLocaleString('id-ID')}</td>
        <td>${dr.toLocaleString('id-ID')}</td>
        <td>x${faktor}</td>
        <td>${denda.toLocaleString('id-ID')}</td>
        <td>${totalBaris.toLocaleString('id-ID')}</td>
      </tr>
    `;
  });

  table += `
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2"><b>JUMLAH</b></td>
          <td><b>${totalVol.toFixed(2).replace('.', ',')}</b></td>
          <td colspan="2"></td>
          <td><b>${totalPsdh.toLocaleString('id-ID')}</b></td>
          <td><b>${totalDr.toLocaleString('id-ID')}</b></td>
          <td></td>
          <td><b>${totalDenda.toLocaleString('id-ID')}</b></td>
          <td><b>${totalSemua.toLocaleString('id-ID')}</b></td>
        </tr>
      </tfoot>
    </table>
  `;

  rekapContainer.innerHTML = table;
  rekapContainer.style.display = 'block';
  document.getElementById("btnDownloadDenda").style.display = "inline-block";

}


function downloadCSV_PSDHDR(data) {
  const meta = window.metadata;

  // Cek jika data kosong
  if (!data || data.length === 0) {
    alert("Tidak ada data yang dapat diunduh.");
    return;
  }

  let csv = `Nama Pelaku Usaha:,"${meta.namaPelakuUsaha}"\nProvinsi:,"${meta.provinsi}"\nRegion:,"${meta.region}"\nAsal Kayu:,"${meta.asalKayu}"\nJenis Perizinan:,"${meta.jenisPerizinan}"\n\n`;
  csv += 'Nama Tanaman,Diameter,TBC,Volume (m3),Kelompok,Sortimen,PSDH (Rp),DR (Rp)\n';

  data.forEach(row => {
    csv += [
      `"${row.namaTanaman}"`,
      row.diameter,
      row.tbc,
      row.volume.toFixed(2),
      `"${row.kelompokJenis}"`,
      row.sortimen,
      row.psdh,  // Sudah angka bersih
      row.dr
    ].join(',') + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const namaFile = `Rekap_PSDH_DR_${meta.namaPelakuUsaha.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.csv`;
  link.href = URL.createObjectURL(blob);
  link.download = namaFile;

  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadCSV_Denda() {
  const rows = document.querySelectorAll('#rekapDendaTable table tbody tr');
  if (rows.length === 0) {
    alert("Tidak ada data rekap denda.");
    return;
  }

  const meta = window.metadata;
  let csv = 
    `Nama Pelaku Usaha:,"${meta.namaPelakuUsaha}"\n` +
    `Provinsi:,"${meta.provinsi}"\n` +
    `Region:,"${meta.region}"\n` +
    `Asal Kayu:,"${meta.asalKayu}"\n` +
    `Jenis Perizinan:,"${meta.jenisPerizinan}"\n` +
    `Pelanggaran:,"${meta.pelanggaran || '-'}"\n\n`;

  csv += "No,Nama Tanaman,Volume (m3),Kelompok,Sortimen,PSDH,DR,Denda (xFaktor),Total Denda,Total Keseluruhan\n";

  // Lanjutkan seperti biasa ...

  let totalPsdh = 0, totalDr = 0, totalDenda = 0, totalKeseluruhan = 0, totalVol = 0;

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const no = cells[0]?.innerText || "";
    const nama = cells[1]?.innerText || "";
    const volume = cells[2]?.innerText.replace(',', '.') || "0";
    const kelompok = cells[3]?.innerText || "";
    const sortimen = cells[4]?.innerText || "";
    const psdh = parseInt(cells[5]?.innerText.replace(/\D/g, '')) || 0;
    const dr = parseInt(cells[6]?.innerText.replace(/\D/g, '')) || 0;
    const dendaStr = cells[7]?.innerText || "x0";
    const denda = parseInt(cells[8]?.innerText.replace(/\D/g, '')) || 0;
    const keseluruhan = parseInt(cells[9]?.innerText.replace(/\D/g, '')) || 0;

    totalPsdh += psdh;
    totalDr += dr;
    totalDenda += denda;
    totalKeseluruhan += keseluruhan;
    totalVol += parseFloat(volume);

    csv += `${no},"${nama}",${volume},"${kelompok}","${sortimen}",${psdh},${dr},"${dendaStr}",${denda},${keseluruhan}\n`;
  });

  // Tambahkan baris jumlah
  csv += `,,${totalVol.toFixed(2)} (JUMLAH),,,,,"",${totalDenda},${totalKeseluruhan}\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const namaFile = `Rekap_Denda_${meta.namaPelakuUsaha.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.csv`;
a.download = namaFile;

  a.click();
  URL.revokeObjectURL(url);
}

function validasiBarisTerakhir() {
  const rows = document.querySelectorAll("#inputBody tr");
  const lastRow = rows[rows.length - 1];
  const inputs = lastRow.querySelectorAll("input");
  return Array.from(inputs).every(inp => inp.value.trim() !== "");
}

function kembaliKeKontainer1() {
  document.getElementById('kontainerInput').style.display = 'none';
  document.getElementById('kontainerIdentitas').style.display = 'block';
  document.getElementById('btnLanjut').style.display = 'inline-block';
  document.getElementById("rekapSederhana").style.display = "none";
}

function hitungVolume(d, t) {
  return 0.7854 * d * d * (t * 0.6 * 0.0001);
}
