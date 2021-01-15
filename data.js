const deposit = [
// TOP 5
    {key: 'topHead', title: 'TOP 5'},
    {key: 'BTC_USD', title: 'Bitcoin',  top: 5, sum: 0.0000000, priceIn: 0,        priceMin: 3500,   priceMax: 41000},
    {key: 'ETH_USD', title: 'Ethereum', top: 5, sum: 0.0000000, priceIn: 0,        priceMin: 105,    priceMax: 1250},
    {key: 'XRP_USD', title: 'Ripple',   top: 5, sum: 26.611355, priceIn: 1.1367,   priceMin: 0.205,  priceMax: 3.2},
    {key: 'XRP_USD', title: 'Ripple',   top: 5, sum: 360.36036, priceIn: 0.332099, priceMin: 0.205,  priceMax: 3.2},
    {key: 'LTC_USD', title: 'Litecoin', top: 5, sum: 0.0000000, priceIn: 0.0,      priceMin: 35,     priceMax: 320},
    {key: 'ADA_USD', title: 'Cardano',  top: 5, sum: 0.0000000, priceIn: 0,        priceMin: 0.0275, priceMax: 1.02},
// TOP 10
    {key: 'topHead', title: 'TOP 10'},
    {key: 'BCH_USD', title: 'Bitcoin Cash', top: 10, sum: 0.00, priceIn: 0, priceMin: 140,   priceMax: 3300},
    {key: 'XLM_USD', title: 'Stellar',      top: 10, sum: 0.00, priceIn: 0, priceMin: 0.045, priceMax: 0.8},
// TOP 20
    {key: 'topHead', title: 'TOP 20'},
    {key: 'EOS_USD', title: 'EOS',    top: 20, sum: 4.6070881, priceIn: 6.63,    priceMin: 2.4,   priceMax: 20},
    {key: 'EOS_USD', title: 'EOS',    top: 20, sum: 12.858015, priceIn: 3.1109,  priceMin: 2.4,   priceMax: 20},
    {key: 'EOS_USD', title: 'EOS',    top: 20, sum: 9.9331266, priceIn: 2.98,    priceMin: 2.4,   priceMax: 20},
    {key: 'EOS_USD', title: 'EOS',    top: 20, sum: 17.667220, priceIn: 2.8301,  priceMin: 2.4,   priceMax: 20},
    {key: 'XMR_USD', title: 'Monero', top: 20, sum: 0.0000000, priceIn: 0,       priceMin: 45,    priceMax: 420},
    {key: 'TRX_USD', title: 'Tron',   top: 20, sum: 1199,      priceIn: 0.0252,  priceMin: 0.014, priceMax: 0.22},
    {key: 'TRX_USD', title: 'Tron',   top: 20, sum: 1000,      priceIn: 0.0252,  priceMin: 0.014, priceMax: 0.22},
    {key: 'TRX_USD', title: 'Tron',   top: 20, sum: 3742.231,  priceIn: 0.02922, priceMin: 0.014, priceMax: 0.22},
    {key: 'XEM_USD', title: 'NEM',    top: 20, sum: 0.0000000, priceIn: 0,       priceMin: 0.033, priceMax: 1.6},
    {key: 'XTZ_USD', title: 'Tezos',  top: 20, sum: 0.0000000, priceIn: 0,       priceMin: 0.38,  priceMax: 4},
// TOP 50
    {key: 'topHead', title: 'TOP 50'},
    {key: 'NEO_USD',   title: 'NEO',              top: 50, sum: 0,         priceIn: 0.000,    priceMin: 6.45,  priceMax: 160},
    {key: 'ATOM_USD',  title: 'Cosmos',           top: 50, sum: 0,         priceIn: 0.0000,   priceMin: 2,     priceMax: 7.5},
    {key: 'DOGE_USD',  title: 'Dogecoin',         top: 50, sum: 0,         priceIn: 0.000000, priceMin: 0.002, priceMax: 0.015},
    {key: 'DASH_USD',  title: 'Dash',             top: 50, sum: 0.0408874, priceIn: 740,      priceMin: 45,    priceMax: 1200},
    {key: 'DASH_USD',  title: 'Dash',             top: 50, sum: 1.0954144, priceIn: 133,      priceMin: 45,    priceMax: 1200},
    {key: 'ETC_USD',   title: 'Ethereum Classic', top: 50, sum: 0.9041805, priceIn: 33.47,    priceMin: 3.8,   priceMax: 40},
    {key: 'ZEC_USD',   title: 'Zcash',            top: 50, sum: 0.2114869, priceIn: 143.88,   priceMin: 30,    priceMax: 882},
    {key: 'WAVES_USD', title: 'Waves',            top: 50, sum: 0,         priceIn: 0.00,     priceMin: 0.8,   priceMax: 15},
// TOP 99
    {key: 'topHead', title: 'TOP 99'},
    {key: 'OMG_USD',  title: 'OmiseGO',      top: 99, sum: 0.0,       priceIn: 0.0,     priceMin: 0.6,  priceMax: 24},
    {key: 'ZRX_USD',  title: '0x',           top: 99, sum: 0,         priceIn: 0.00000, priceMin: 0.17, priceMax: 2},
    {key: 'QTUM_USD', title: 'Qtum',         top: 99, sum: 0.0,       priceIn: 0.00,    priceMin: 1.54, priceMax: 90},
    {key: 'BTG_USD',  title: 'Bitcoin Gold', top: 99, sum: 0.7835423, priceIn: 39,      priceMin: 6,    priceMax: 420},
    {key: 'LSK_USD',  title: 'Lisk',         top: 99, sum: 9.672,     priceIn: 3.15,    priceMin: 0.8,  priceMax: 32},
    {key: 'LSK_USD',  title: 'Lisk',         top: 99, sum: 11.19403,  priceIn: 1.34,    priceMin: 0.8,  priceMax: 32},
// TOP 500
    {key: 'topHead', title: 'TOP 500'},
    {key: 'GAS_USD', title: 'Gas', top: 500, sum: 5.6156, priceIn: 5.37, priceMin: 1, priceMax: 65},
// TOP 1
    {key: 'USD', title: 'Exmo', priceNow: 1, sum: 104.28, priceIn: 1, priceMin: 1, priceMax: 1},
];



// add - закинув на біржку; out - вивів з біржи; buy - купив валюту; sell - продав валюту
const actions = [
// 2018
    {date: '17.01.2018', type: 'add',  pair: '',          sum: 33.60,     price: 1,        sumUsd: 33.60},    // 1000грн
    {date: '22.01.2018', type: 'add',  pair: '',          sum: 15.52,     price: 1,        sumUsd: 15.52},    // 462грн
    {date: '23.01.2018', type: 'add',  pair: '',          sum: 40.32,     price: 1,        sumUsd: 40.32},    // 1200грн
    {date: '05.02.2018', type: 'add',  pair: '',          sum: 45.56,     price: 1,        sumUsd: 45.56},    // 1047грн
    {date: '13.02.2018', type: 'add',  pair: '',          sum: 33.60,     price: 1,        sumUsd: 33.60},    // 1000грн
    {date: '16.02.2018', type: 'add',  pair: '',          sum: 21.00,     price: 1,        sumUsd: 21.00},    // 625грн
    {date: '22.02.2018', type: 'add',  pair: '',          sum: 37.58,     price: 1,        sumUsd: 37.58},    // 1015грн
    {date: '23.02.2018', type: 'add',  pair: '',          sum: 42.02,     price: 1,        sumUsd: 42.02},    // 1150грн
    {date: '13.08.2018', type: 'add',  pair: '',          sum: 35.02,     price: 1,        sumUsd: 35.02},    // 1000грн
    {date: '04.09.2018', type: 'add',  pair: '',          sum: 106.11,    price: 1,        sumUsd: 106.11},   // 3000грн
    {date: '08.09.2018', type: 'add',  pair: '',          sum: 62.34,     price: 1,        sumUsd: 62.34},    // 1800грн
    {date: '09.09.2018', type: 'add',  pair: '',          sum: 46.06,     price: 1,        sumUsd: 46.06},    // 1330грн
    {date: '12.09.2018', type: 'add',  pair: '',          sum: 42.24,     price: 1,        sumUsd: 42.24},    // 1200грн
    {date: '24.09.2018', type: 'add',  pair: '',          sum: 35.37,     price: 1,        sumUsd: 35.37},    // 1000грн
    {date: '25.09.2018', type: 'add',  pair: '',          sum: 21.22,     price: 1,        sumUsd: 21.22},    // 600грн
    {date: '11.10.2018', type: 'add',  pair: '',          sum: 107.27,    price: 1,        sumUsd: 107.27},   // 3000грн
    {date: '11.10.2018', type: 'buy',  pair: 'TRX/USD',   sum: 1400,      price: 0.0228,   sumUsd: 31.92},
    {date: '11.10.2018', type: 'buy',  pair: 'ADA/USD',   sum: 400,       price: 0.077,    sumUsd: 30.8},
    {date: '11.10.2018', type: 'buy',  pair: 'OMG/USD',   sum: 4.1346154, price: 3.12,     sumUsd: 12.90},
    {date: '11.10.2018', type: 'buy',  pair: 'XLM/USD',   sum: 57.020589, price: 0.22,     sumUsd: 12.54},
    {date: '15.10.2018', type: 'add',  pair: '',          sum: 107.34,    price: 1,        sumUsd: 107.34},   // 3000грн
    {date: '15.10.2018', type: 'buy',  pair: 'GAS/USD',   sum: 6,         price: 5.37,     sumUsd: 32.22},
    {date: '19.10.2018', type: 'sell', pair: 'XLM/USD',   sum: 56.906548, price: 0.2415,   sumUsd: 13.74},
    {date: '19.10.2018', type: 'sell', pair: 'TRX/USD',   sum: 1397.2,    price: 0.0246,   sumUsd: 34.37},
    {date: '19.10.2018', type: 'sell', pair: 'OMG/USD',   sum: 4,         price: 3.27665,  sumUsd: 13.11},
// 2019
    {date: '18.01.2019', type: 'sell', pair: 'ADA/USD',   sum: 148,       price: 0.045,    sumUsd: 6.68},
    {date: '18.01.2019', type: 'sell', pair: 'BTC/USD',   sum: 0.00103,   price: 3720,     sumUsd: 3.83},
    {date: '18.01.2019', type: 'buy',  pair: 'EOS/USD',   sum: 1.52,      price: 2.53,     sumUsd: 3.85},
    {date: '18.01.2019', type: 'sell', pair: 'EOS/USD',   sum: 0.904,     price: 2.5,      sumUsd: 2.26},
    {date: '18.01.2019', type: 'sell', pair: 'ETC/USD',   sum: 0.68718,   price: 4.416,    sumUsd: 3.04},
    {date: '18.01.2019', type: 'buy',  pair: 'DASH/USD',  sum: 0.02094,   price: 72.85,    sumUsd: 1.53},
    {date: '18.01.2019', type: 'sell', pair: 'GAS/USD',   sum: 0.3724,    price: 2.19,     sumUsd: 0.82},
    {date: '18.01.2019', type: 'buy',  pair: 'LTC/USD',   sum: 0.37009,   price: 31.73926, sumUsd: 11.75},
    {date: '18.01.2019', type: 'sell', pair: 'NEO/USD',   sum: 0.72704,   price: 7.7,      sumUsd: 5.60},
    {date: '18.01.2019', type: 'sell', pair: 'OMG/USD',   sum: 55.31,     price: 1.28,     sumUsd: 70.80},
    {date: '18.01.2019', type: 'sell', pair: 'XRP/USD',   sum: 28.1,      price: 0.332,    sumUsd: 9.33},
    {date: '18.01.2019', type: 'buy',  pair: 'ZEC/USD',   sum: 0.17167,   price: 54.38257, sumUsd: 9.33},
    {date: '18.01.2019', type: 'buy',  pair: 'BCH/USD',   sum: 0.06682,   price: 131.5,    sumUsd: 8.79},
    {date: '18.01.2019', type: 'buy',  pair: 'XLM/USD',   sum: 137,       price: 0.109,    sumUsd: 14.93},
    {date: '18.01.2019', type: 'buy',  pair: 'TRX/USD',   sum: 1200,      price: 0.026,    sumUsd: 31.05},
    {date: '18.01.2019', type: 'buy',  pair: 'XMR/USD',   sum: 0.28571,   price: 46,       sumUsd: 13.13},
    {date: '18.01.2019', type: 'buy',  pair: 'XEM/USD',   sum: 297,       price: 0.0583,   sumUsd: 17.30},
    {date: '18.01.2019', type: 'buy',  pair: 'LSK/USD',   sum: 9.6774,    price: 1.299989, sumUsd: 12.58},
    {date: '18.01.2019', type: 'buy',  pair: 'BTG/USD',   sum: 0.7840127, price: 11.3,     sumUsd: 8.86},
    {date: '10.06.2019', type: 'sell', pair: 'LTC/USD',   sum: 0.4564386, price: 125,      sumUsd: 57.07},
    {date: '10.06.2019', type: 'buy',  pair: 'WAVES/USD', sum: 11.161242, price: 2.36,     sumUsd: 26.34},
    {date: '17.06.2019', type: 'buy',  pair: 'LTC/USD',   sum: 0.2289963, price: 134.5,    sumUsd: 30.80},
// 2020
    {date: '01.01.2020', type: 'sell', pair: 'XRP/USD',   sum: 26.883529, price: 0.2026,   sumUsd: 5.45},
    {date: '01.01.2020', type: 'buy',  pair: 'XRP/USD',   sum: 26.750544, price: 0.2032,   sumUsd: 5.44},
    {date: '28.07.2020', type: 'sell', pair: 'XRP/USD',   sum: 10,        price: 0.218,    sumUsd: 2.18},
    {date: '28.07.2020', type: 'buy',  pair: 'XRP/USD',   sum: 9.9541284, price: 0.218,    sumUsd: 2.17},
    {date: '16.11.2020', type: 'sell', pair: 'WAVES/USD', sum: 11.138920, price: 5.05896,  sumUsd: 56.35},
    {date: '16.11.2020', type: 'buy',  pair: 'TRX/USD',   sum: 1000,      price: 0.025419, sumUsd: 25.42},
    {date: '20.11.2020', type: 'buy',  pair: 'OMG/USD',   sum: 9.0312858, price: 3.404036, sumUsd: 30.71},
// 2021
    {date: '08.01.2021', type: 'sell', pair: 'ADA/USD',   sum: 400.76435, price: 0.311,    sumUsd: 124.64},
    {date: '08.01.2021', type: 'sell', pair: 'BTC/USD',   sum: 0.0026993, price: 38846.21, sumUsd: 104.86},
    {date: '08.01.2021', type: 'sell', pair: 'XEM/USD',   sum: 296.8218,  price: 0.2314,   sumUsd: 68.77},
    {date: '08.01.2021', type: 'sell', pair: 'ETH/USD',   sum: 0.031936,  price: 1191,     sumUsd: 38.04},
    {date: '08.01.2021', type: 'sell', pair: 'LTC/USD',   sum: 0.228538,  price: 164.5859, sumUsd: 37.61},
    {date: '08.01.2021', type: 'buy',  pair: 'QTUM/USD',  sum: 40.931,    price: 2.92,     sumUsd: 120.00},
    {date: '08.01.2021', type: 'buy',  pair: 'XRP/USD',   sum: 360.36,    price: 0.33209,  sumUsd: 119.68},
    {date: '09.01.2021', type: 'buy',  pair: 'BCH/USD',   sum: 0.046581,  price: 429,      sumUsd: 19.98},
    {date: '09.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 12.858015, price: 3.1109,   sumUsd: 40.00},
    {date: '09.01.2021', type: 'buy',  pair: 'LSK/USD',   sum: 11.19403,  price: 1.34,     sumUsd: 15.00},
    {date: '09.01.2021', type: 'buy',  pair: 'DASH/USD',  sum: 0.30653,   price: 97.87,    sumUsd: 30.00},
    {date: '09.01.2021', type: 'buy',  pair: 'ZEC/USD',   sum: 0.2189781, price: 68.49389, sumUsd: 15.00},
    {date: '09.01.2021', type: 'buy',  pair: 'BTG/USD',   sum: 1.2888575, price: 9.899999, sumUsd: 11.62},
    {date: '11.01.2021', type: 'sell', pair: 'ZEC/USD',   sum: 0.21897,   price: 106,      sumUsd: 23.21},
    {date: '11.01.2021', type: 'sell', pair: 'XMR/USD',   sum: 0.2855386, price: 173,      sumUsd: 49.40},
    {date: '11.01.2021', type: 'sell', pair: 'NEO/USD',   sum: 0.2053279, price: 24.4,     sumUsd: 5.01},
    {date: '11.01.2021', type: 'sell', pair: 'NEO/USD',   sum: 1.0572745, price: 24.15,    sumUsd: 25.53},
    {date: '11.01.2021', type: 'sell', pair: 'DASH/USD',  sum: 0.30653,   price: 133,      sumUsd: 42.35},
    {date: '11.01.2021', type: 'buy',  pair: 'LTC/USD',   sum: 1.0068284, price: 143.9473, sumUsd: 144.93},
    {date: '12.01.2021', type: 'sell', pair: 'BTG/USD',   sum: 1.28886,   price: 12.3,     sumUsd: 15.85},
    {date: '12.01.2021', type: 'sell', pair: 'XLM/USD',   sum: 136.9178,  price: 0.289,    sumUsd: 39.57},
    {date: '12.01.2021', type: 'sell', pair: 'BCH/USD',   sum: 0.1131745, price: 483,      sumUsd: 54.66},
    {date: '12.01.2021', type: 'buy',  pair: 'TRX/USD',   sum: 3742.2307, price: 0.029219, sumUsd: 109.34},
    {date: '14.01.2021', type: 'sell', pair: 'LTC/USD',   sum: 1.0028011, price: 145.5,    sumUsd: 145.91},
    {date: '14.01.2021', type: 'buy',  pair: 'DASH/USD',  sum: 1.0954144, price: 145.5,    sumUsd: 145.69},
    {date: '14.01.2021', type: 'sell', pair: 'OMG/USD',   sum: 9,         price: 3.302173, sumUsd: 29.72},
    {date: '14.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 9.9331266, price: 2.979996, sumUsd: 29.60},
    {date: '15.01.2021', type: 'sell', pair: 'QTUM/USD',  sum: 40.931507, price: 3.1121,   sumUsd: 127.38},
    {date: '15.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 17.667220, price: 2.8301,   sumUsd: 50.00},
    {date: '15.01.2021', type: 'sell', pair: 'OMG/USD',   sum: 7.3115067, price: 3.73,     sumUsd: 27.27},
]



const analytics = [
// 2018
    {month: 'Січень 2018',   add: 89.44,  sumBegin: 0,      sumEnd: 37.81},
    {month: 'Лютий 2018',    add: 179.76, sumBegin: 37.81,  sumEnd: 218.90},
    {month: 'Березень 2018', add: 0,      sumBegin: 218.90, sumEnd: 180.00},
    {month: 'Квітень 2018',  add: 0,      sumBegin: 180.00, sumEnd: 194.47},
    {month: 'Травень 2018',  add: 0,      sumBegin: 194.47, sumEnd: 137.11},
    {month: 'Червень 2018',  add: 0,      sumBegin: 137.11, sumEnd: 107.53},
    {month: 'Липень 2018',   add: 0,      sumBegin: 107.53, sumEnd: 107.53},
    {month: 'Серпень 2018',  add: 35.02,  sumBegin: 107.53, sumEnd: 131.04},
    {month: 'Вересень 2018', add: 313.34, sumBegin: 131.04, sumEnd: 408.09},
    {month: 'Жовтень 2018',  add: 214.61, sumBegin: 408.09, sumEnd: 642.63},
    {month: 'Листопад 2018', add: 0,      sumBegin: 642.63, sumEnd: 642.63},
    {month: 'Грудень 2018',  add: 0,      sumBegin: 642.63, sumEnd: 642.63},
// 2019
    {month: 'Січень 2019',   add: 0,      sumBegin: 642.63, sumEnd: 642.63},
    {month: 'Лютий 2019',    add: 0,      sumBegin: 642.63, sumEnd: 642.63},
    {month: 'Березень 2019', add: 0,      sumBegin: 642.63, sumEnd: 642.63},
    {month: 'Квітень 2019',  add: 0,      sumBegin: 642.63, sumEnd: 642.63},
    {month: 'Травень 2019',  add: 0,      sumBegin: 642.63, sumEnd: 445.92},
    {month: 'Червень 2019',  add: 0,      sumBegin: 445.92, sumEnd: 352.23},
    {month: 'Липень 2019',   add: 0,      sumBegin: 352.23, sumEnd: 323.42},
    {month: 'Серпень 2019',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Вересень 2019', add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Жовтень 2019',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Листопад 2019', add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Грудень 2019',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
// 2020
    {month: 'Січень 2020',   add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Лютий 2020',    add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Березень 2020', add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Квітень 2020',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Травень 2020',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Червень 2020',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Липень 2020',   add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Серпень 2020',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Вересень 2020', add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Жовтень 2020',  add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Листопад 2020', add: 0,      sumBegin: 323.42, sumEnd: 323.42},
    {month: 'Грудень 2020',  add: 0,      sumBegin: 323.42, sumEnd: 695.52},
// 2021
    //{month: 'Січень 2021',   add: 0,      sumBegin: 323.42, sumEnd: 323.42},
];



export { deposit, actions, analytics };
