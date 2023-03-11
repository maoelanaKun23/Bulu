export const dataStaggings = [
  {
    shipmentType: "9JKNTC",
    stage: ["1", "2", "3"],
    moda: ["Darat", "Laut", "Darat"],
    origin: [
      {
        main: "Yard UT Sukapura",
        sub:
          "Jl. Raya Bekasi No.KM.22, RW.1, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910"
      },
      {
        main: "Pelabuhan Tanjung Priuk",
        sub:
          "Jl. Raya Pelabuhan No. 9 Tanjung Priok, Jakarta Utara, 14310. Email : priok@pelindo.co.id. Telepon : (021) 4301080"
      },
      {
        main: "Pelabuhan Kupang",
        sub:
          "Jl. Cendrawasih No.26, Lahilai Bissi Kopan, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Tim., Indonesia"
      }
    ],
    destination: [
      {
        main: "Pelabuhan Tanjung Priuk",
        sub:
          "Jl. Raya Pelabuhan No. 9 Tanjung Priok, Jakarta Utara, 14310. Email : priok@pelindo.co.id. Telepon : (021) 4301080"
      },
      {
        main: "Pelabuhan Kupang",
        sub:
          "Jl. Cendrawasih No.26, Lahilai Bissi Kopan, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Tim., Indonesia"
      },
      {
        main: "PT AMMAN",
        sub:
          "PT. AMMAN MINERAL NUSA TENGGARA (AMNT), Tongo, West Sumbawa Regency, West Nusa Tenggara, Indonesia"
      }
    ]
  },
  {
    shipmentType: "9JKSD1",
    stage: ["1", "2", "3"],
    moda: ["Darat", "Laut", "Darat"],
    origin: [
      {
        main: "Yard UT Sukapura",
        sub:
          "Jl. Raya Bekasi No.KM.22, RW.1, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910"
      },
      {
        main: "Pelabuhan Tanjung Priuk",
        sub:
          "Jl. Raya Pelabuhan No. 9 Tanjung Priok, Jakarta Utara, 14310. Email : priok@pelindo.co.id. Telepon : (021) 4301080"
      },
      {
        main: "Pelabuhan Balikpapan",
        sub:
          "Pelabuhan Balikpapan, Prapatan, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76111"
      }
    ],
    destination: [
      {
        main: "Pelabuhan Tanjung Priuk",
        sub:
          "Jl. Raya Pelabuhan No. 9 Tanjung Priok, Jakarta Utara, 14310. Email : priok@pelindo.co.id. Telepon : (021) 4301080"
      },
      {
        main: "Pelabuhan Kupang",
        sub:
          "Jl. Cendrawasih No.26, Lahilai Bissi Kopan, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Tim., Indonesia"
      },
      {
        main: "UT Samarinda",
        sub:
          "Pusat Pengembangan Industri No.7500, Loa Bakung, Sungai Kunjang, Samarinda City, East Kalimantan 75243"
      }
    ]
  }
];

export const dataPoints = [
  {
    mainPlace: "Yard UT Sukapura",
    address:
      "Jl. Raya Bekasi No.KM.22, RW.1, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910",
    latitude: "",
    longitude: ""
  },
  {
    mainPlace: "Pelabuhan Kupang",
    address:
      "Jl. Cendrawasih No.26, Lahilai Bissi Kopan, Kec. Kota Lama, Kota Kupang, Nusa Tenggara Tim., Indonesia.",
    latitude: "",
    longitude: ""
  },
  {
    mainPlace: "Pelabuhan Tanjung Priuk",
    address:
      "Jl. Raya Pelabuhan No. 9 Tanjung Priok, Jakarta Utara, 14310. Email : priok@pelindo.co.id. Telepon : (021) 4301080",
    latitude: "",
    longitude: ""
  },
  {
    mainPlace: "PT AMMAN",
    address:
      "PT. AMMAN MINERAL NUSA TENGGARA (AMNT), Tongo, West Sumbawa Regency, West Nusa Tenggara, Indonesia",
    latitude: "",
    longitude: ""
  },
  {
    mainPlace: "Pelabuhan Balikpapan",
    address:
      "Pelabuhan Balikpapan, Prapatan, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76111",
    latitude: "",
    longitude: ""
  },
  {
    mainPlace: "UT Samarinda",
    address:
      "Pusat Pengembangan Industri No.7500, Loa Bakung, Sungai Kunjang, Samarinda City, East Kalimantan 75243",
    latitude: "",
    longitude: ""
  }
];

export const dataDeliveryStatus = {
  darat: [
    { pointDarat: "Menuju Lokasi Muat" },
    { pointDarat: "Tiba di Lokasi Muat" },
    { pointDarat: "Mulai Muat" },
    { pointDarat: "Selesai Muat" },
    { pointDarat: "Menuju Lokasi Bongkar" },
    { pointDarat: "Tiba di Lokasi Bongkar" },
    { pointDarat: "Mulai Bongkar" },
    { pointDarat: "Selesai Bongkar" }
  ],
  laut: [
    { pointLaut: "Mulai Muat di Pelabuhan Asal" },
    { pointLaut: "Selesai Muat di Pelabuhan Asal" },
    { pointLaut: "Menuju Pelabuhan Tujuan" },
    { pointLaut: "Tiba di Pelabuhan Tujuan" },
    { pointLaut: "Mulai Bongkar di Pelabuhan Tujuan" },
    { pointLaut: "Selesai Bongkar di Pelabuhan Tujuan" }
  ]
};
