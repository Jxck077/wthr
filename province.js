const provinces = [
  {
    name: "Bangkok",
    lat: 13.7563,
    lon: 100.5018
  },
  {
    name: "Krabi",
    lat: 8.0863,
    lon: 98.9063
  },
  {
    name: "Kanchanaburi",
    lat: 14.0228,
    lon: 99.5328
  },
  {
    name: "Kalasin",
    lat: 16.4380,
    lon: 103.5060
  },
  {
    name: "Kamphaeng Phet",
    lat: 16.4828,
    lon: 99.5227
  },
  {
    name: "Khon Kaen",
    lat: 16.4419,
    lon: 102.8350
  },
  {
    name: "Chanthaburi",
    lat: 12.6113,
    lon: 102.1038
  },
  {
    name: "Chachoengsao",
    lat: 13.6904,
    lon: 101.0779
  },
  {
    name: "Chonburi",
    lat: 13.3611,
    lon: 100.9847
  },
  {
    name: "Chai Nat",
    lat: 15.1850,
    lon: 100.1251
  },
  {
    name: "Chaiyaphum",
    lat: 15.8068,
    lon: 102.0315
  },
  {
    name: "Chumphon",
    lat: 10.4930,
    lon: 99.1800
  },
  {
    name: "Chiang Rai",
    lat: 19.9105,
    lon: 99.8406
  },
  {
    name: "Chiang Mai",
    lat: 18.7883,
    lon: 98.9853
  },
  {
    name: "Trang",
    lat: 7.5562,
    lon: 99.6114
  },
  {
    name: "Trat",
    lat: 12.2428,
    lon: 102.5175
  },
  {
    name: "Tak",
    lat: 16.8839,
    lon: 99.1258
  },
  {
    name: "Nakhon Nayok",
    lat: 14.2069,
    lon: 101.2131
  },
  {
    name: "Nakhon Pathom",
    lat: 13.8200,
    lon: 100.0400
  },
  {
    name: "Nakhon Phanom",
    lat: 17.3980,
    lon: 104.7695
  },
  {
    name: "Nakhon Ratchasima",
    lat: 14.9738,
    lon: 102.0827
  },
  {
    name: "Nakhon Si Thammarat",
    lat: 8.4304,
    lon: 99.9631
  },
  {
    name: "Nakhon Sawan",
    lat: 15.7001,
    lon: 100.1372
  },
  {
    name: "Nonthaburi",
    lat: 13.8591,
    lon: 100.4930
  },
  {
    name: "Narathiwat",
    lat: 6.4255,
    lon: 101.8253
  },
  {
    name: "Nan",
    lat: 18.7830,
    lon: 100.7816
  },
  {
    name: "Bueng Kan",
    lat: 18.3614,
    lon: 103.6450
  },
  {
    name: "Buri Ram",
    lat: 14.9930,
    lon: 103.1029
  },
  {
    name: "Pathum Thani",
    lat: 14.0208,
    lon: 100.5250
  },
  {
    name: "Prachuap Khiri Khan",
    lat: 11.8000,
    lon: 99.7833
  },
  {
    name: "Prachinburi",
    lat: 14.0500,
    lon: 101.3667
  },
  {
    name: "Pattani",
    lat: 6.8667,
    lon: 101.2500
  },
  {
    name: "Phra Nakhon Si Ayutthaya",
    lat: 14.3532,
    lon: 100.5691
  },
  {
    name: "Phayao",
    lat: 19.1667,
    lon: 99.9000
  },
  {
    name: "Phang Nga",
    lat: 8.4503,
    lon: 98.5298
  },
  {
    name: "Phatthalung",
    lat: 7.6167,
    lon: 100.0833
  },
  {
    name: "Phichit",
    lat: 16.4419,
    lon: 100.3486
  },
  {
    name: "Phitsanulok",
    lat: 16.8219,
    lon: 100.2659
  },
  {
    name: "Phetchaburi",
    lat: 13.1114,
    lon: 99.9439
  },
  {
    name: "Phetchabun",
    lat: 16.4190,
    lon: 101.1578
  },
  {
    name: "Phrae",
    lat: 18.1444,
    lon: 100.1403
  },
  {
    name: "Phuket",
    lat: 7.8804,
    lon: 98.3923
  },
  {
    name: "Maha Sarakham",
    lat: 16.1850,
    lon: 103.3004
  },
  {
    name: "Mukdahan",
    lat: 16.5434,
    lon: 104.7128
  },
  {
    name: "Mae Hong Son",
    lat: 19.3002,
    lon: 97.9685
  },
  {
    name: "Yasothon",
    lat: 15.7926,
    lon: 104.1453
  },
  {
    name: "Yala",
    lat: 6.5411,
    lon: 101.2804
  },
  {
    name: "Roi Et",
    lat: 16.0538,
    lon: 103.6521
  },
  {
    name: "Ranong",
    lat: 9.9658,
    lon: 98.6348
  },
  {
    name: "Rayong",
    lat: 12.6814,
    lon: 101.2813
  },
  {
    name: "Ratchaburi",
    lat: 13.5283,
    lon: 99.8134
  },
  {
    name: "Lopburi",
    lat: 14.7995,
    lon: 100.6534
  },
  {
    name: "Lampang",
    lat: 18.2855,
    lon: 99.5128
  },
  {
    name: "Lamphun",
    lat: 18.5741,
    lon: 99.0084
  },
  {
    name: "Loei",
    lat: 17.4860,
    lon: 101.7223
  },
  {
    name: "Si Sa Ket",
    lat: 15.1182,
    lon: 104.3220
  },
  {
    name: "Sakon Nakhon",
    lat: 17.1536,
    lon: 104.1486
  },
  {
    name: "Songkhla",
    lat: 7.1898,
    lon: 100.5954
  },
  {
    name: "Satun",
    lat: 6.6231,
    lon: 100.0674
  },
  {
    name: "Samut Prakan",
    lat: 13.5991,
    lon: 100.5968
  },
  {
    name: "Samut Songkhram",
    lat: 13.4098,
    lon: 100.0023
  },
  {
    name: "Samut Sakhon",
    lat: 13.5475,
    lon: 100.2744
  },
  {
    name: "Sa Kaeo",
    lat: 13.8240,
    lon: 102.0646
  },
  {
    name: "Saraburi",
    lat: 14.5289,
    lon: 100.9101
  },
  {
    name: "Sing Buri",
    lat: 14.8936,
    lon: 100.3967
  },
  {
    name: "Sukhothai",
    lat: 17.0078,
    lon: 99.8262
  },
  {
    name: "Suphan Buri",
    lat: 14.4745,
    lon: 100.1222
  },
  {
    name: "Surat Thani",
    lat: 9.1382,
    lon: 99.3213
  },
  {
    name: "Surin",
    lat: 14.8818,
    lon: 103.4937
  },
  {
    name: "Nong Khai",
    lat: 17.8785,
    lon: 102.7423
  },
  {
    name: "Nong Bua Lamphu",
    lat: 17.2034,
    lon: 102.4375
  },
  {
    name: "Ang Thong",
    lat: 14.5884,
    lon: 100.4538
  },
  {
    name: "Amnat Charoen",
    lat: 15.8548,
    lon: 104.6245
  },
  {
    name: "Udon Thani",
    lat: 17.4138,
    lon: 102.7872
  },
  {
    name: "Uttaradit",
    lat: 17.6201,
    lon: 100.0993
  },
  {
    name: "Uthai Thani",
    lat: 15.3783,
    lon: 100.0247
  },
  {
    name: "Ubon Ratchathani",
    lat: 15.2287,
    lon: 104.8564
  }
];
