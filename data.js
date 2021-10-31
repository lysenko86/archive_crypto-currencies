const depositShort = [
  // PAIRS FOR THE TRADING
    {key: 'topHead',  title: 'PAIRS FOR THE TRADING'},
    {key: 'BCH_USD',   title: 'Bitcoin Cash', sum: 0.22269, priceIn: 672.37},
    {key: 'EOS_USD',   title: 'EOS',          sum: 70,      priceIn: 4.473},
    {key: 'EXM_USD',   title: 'EXMO Coin',    sum: 4520,    priceIn: 0.0658},
    {key: 'EXM_USD',   title: 'EXMO Coin',    sum: 3980,    priceIn: 0.064},
    {key: 'XEM_USD',   title: 'NEM',          sum: 1510,    priceIn: 0.212},
    {key: 'XRP_USD',   title: 'Ripple',       sum: 454,     priceIn: 1.531},
    {key: 'ADA_USD',   title: 'Cardano',      sum: 0,       priceIn: 0},
    {key: 'ATOM_USD',  title: 'Cosmos',       sum: 0,       priceIn: 0},
    {key: 'BTC_USD',   title: 'Bitcoin',      sum: 0,       priceIn: 0},
    {key: 'BTG_USD',   title: 'Bitcoin Gold', sum: 0,       priceIn: 0},
    {key: 'DASH_USD',  title: 'Dash',         sum: 0,       priceIn: 0},
    {key: 'DOGE_USD',  title: 'Dogecoin',     sum: 0,       priceIn: 0},
    {key: 'DOT_USD',   title: 'Polkadot',     sum: 0,       priceIn: 0},
    {key: 'ETH_USD',   title: 'Ethereum',     sum: 0,       priceIn: 0},
    {key: 'LTC_USD',   title: 'Litecoin',     sum: 0,       priceIn: 0},
    {key: 'NEO_USD',   title: 'NEO',          sum: 0,       priceIn: 0},
    {key: 'OMG_USD',   title: 'OmiseGO',      sum: 0,       priceIn: 0},
    {key: 'QTUM_USD',  title: 'Qtum',         sum: 0,       priceIn: 0.0},
    {key: 'TRX_USD',   title: 'Tron',         sum: 0,       priceIn: 0},
    {key: 'WAVES_USD', title: 'Waves',        sum: 0,       priceIn: 0},
    {key: 'XLM_USD',   title: 'Stellar',      sum: 0,       priceIn: 0},
    {key: 'XTZ_USD',   title: 'Tezos',        sum: 0,       priceIn: 0},
    {key: 'ZEC_USD',   title: 'Zcash',        sum: 0,       priceIn: 0},
    {key: 'ZRX_USD',   title: '0x',           sum: 0,       priceIn: 0},
// TOTAL
    {key: 'topHead', title: 'TOTAL'},
];



const depositLong = [
// PAIRS FOR THE INVESTING
// PRIORITY 1
    {key: 'topHead',  title: 'PRIORITY 1'},
    {key: 'ADA_USD',  title: 'Cardano',   sum: 0,    priceIn: 0.0},
    {key: 'BTC_USD',  title: 'Bitcoin',   sum: 0,    priceIn: 0.0},
    {key: 'DOT_USD',  title: 'Polkadot',  sum: 0,    priceIn: 0.0},
    {key: 'ETH_USD',  title: 'Ethereum',  sum: 0,    priceIn: 0.0},
    {key: 'EXM_USD',  title: 'EXMO Coin', sum: 2000, priceIn: 0.0658},
    {key: 'XLM_USD',  title: 'Stellar',   sum: 0,    priceIn: 0.0},
    {key: 'XRP_USD',  title: 'Ripple',    sum: 1500, priceIn: 1.531},
// PRIORITY 2
    {key: 'topHead',  title: 'PRIORITY 2'},
    {key: 'BCH_USD',  title: 'Bitcoin Cash', sum: 0, priceIn: 0.0},
    {key: 'DASH_USD', title: 'Dash',         sum: 0, priceIn: 0.0},
    {key: 'LTC_USD',  title: 'Litecoin',     sum: 0, priceIn: 0.0},
    {key: 'NEO_USD',  title: 'NEO',          sum: 0, priceIn: 0.0},
    {key: 'ZEC_USD',  title: 'Zcash',        sum: 0, priceIn: 0.0},
// PRIORITY 3
    {key: 'topHead',   title: 'PRIORITY 3'},
    {key: 'ATOM_USD',  title: 'Cosmos',       sum: 0, priceIn: 0.0},
    {key: 'BTG_USD',   title: 'Bitcoin Gold', sum: 0, priceIn: 0.0},
    {key: 'DOGE_USD',  title: 'Dogecoin',     sum: 0, priceIn: 0.0},
    {key: 'EOS_USD',   title: 'EOS',          sum: 0, priceIn: 0.0},
    {key: 'OMG_USD',   title: 'OmiseGO',      sum: 0, priceIn: 0.0},
    {key: 'QTUM_USD',  title: 'Qtum',         sum: 0, priceIn: 0.0},
    {key: 'TRX_USD',   title: 'Tron',         sum: 0, priceIn: 0.0},
    {key: 'WAVES_USD', title: 'Waves',        sum: 0, priceIn: 0.0},
    {key: 'XEM_USD',   title: 'NEM',          sum: 0, priceIn: 0.0},
    {key: 'XTZ_USD',   title: 'Tezos',        sum: 0, priceIn: 0.0},
    {key: 'ZRX_USD',   title: '0x',           sum: 0, priceIn: 0.0},
// TOTAL
    {key: 'topHead', title: 'TOTAL'},
];



// add - закинув на біржку; out - вивів з біржи; buy - купив валюту; sell - продав валюту
const actions = [
// 2018
    {date: '17.01.2018', type: 'add',  pair: '',          sum: 33.60,     price: 1,        sumUsd: 33.60},    // in 1000грн
    {date: '22.01.2018', type: 'add',  pair: '',          sum: 15.52,     price: 1,        sumUsd: 15.52},    // in 462грн
    {date: '23.01.2018', type: 'add',  pair: '',          sum: 40.32,     price: 1,        sumUsd: 40.32},    // in 1200грн
    {date: '05.02.2018', type: 'add',  pair: '',          sum: 45.56,     price: 1,        sumUsd: 45.56},    // in 1047грн
    {date: '13.02.2018', type: 'add',  pair: '',          sum: 33.60,     price: 1,        sumUsd: 33.60},    // in 1000грн
    {date: '16.02.2018', type: 'add',  pair: '',          sum: 21.00,     price: 1,        sumUsd: 21.00},    // in 625грн
    {date: '22.02.2018', type: 'add',  pair: '',          sum: 37.58,     price: 1,        sumUsd: 37.58},    // in 1015грн
    {date: '23.02.2018', type: 'add',  pair: '',          sum: 42.02,     price: 1,        sumUsd: 42.02},    // in 1150грн
    {date: '13.08.2018', type: 'add',  pair: '',          sum: 35.02,     price: 1,        sumUsd: 35.02},    // in 1000грн
    {date: '04.09.2018', type: 'add',  pair: '',          sum: 106.11,    price: 1,        sumUsd: 106.11},   // in 3000грн
    {date: '08.09.2018', type: 'add',  pair: '',          sum: 62.34,     price: 1,        sumUsd: 62.34},    // in 1800грн
    {date: '09.09.2018', type: 'add',  pair: '',          sum: 46.06,     price: 1,        sumUsd: 46.06},    // in 1330грн
    {date: '12.09.2018', type: 'add',  pair: '',          sum: 42.24,     price: 1,        sumUsd: 42.24},    // in 1200грн
    {date: '24.09.2018', type: 'add',  pair: '',          sum: 35.37,     price: 1,        sumUsd: 35.37},    // in 1000грн
    {date: '25.09.2018', type: 'add',  pair: '',          sum: 21.22,     price: 1,        sumUsd: 21.22},    // in 600грн
    {date: '11.10.2018', type: 'add',  pair: '',          sum: 107.27,    price: 1,        sumUsd: 107.27},   // in 3000грн
    {date: '11.10.2018', type: 'buy',  pair: 'TRX/USD',   sum: 1400,      price: 0.0228,   sumUsd: 31.92},
    {date: '11.10.2018', type: 'buy',  pair: 'ADA/USD',   sum: 400,       price: 0.077,    sumUsd: 30.8},
    {date: '11.10.2018', type: 'buy',  pair: 'OMG/USD',   sum: 4.1346154, price: 3.12,     sumUsd: 12.90},
    {date: '11.10.2018', type: 'buy',  pair: 'XLM/USD',   sum: 57.020589, price: 0.22,     sumUsd: 12.54},
    {date: '15.10.2018', type: 'add',  pair: '',          sum: 107.34,    price: 1,        sumUsd: 107.34},   // in 3000грн
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
    {date: '15.01.2021', type: 'buy',  pair: 'XEM/USD',   sum: 354.17869, price: 0.2132,   sumUsd: 75.51},
    {date: '15.01.2021', type: 'buy',  pair: 'BTG/USD',   sum: 2.557395,  price: 11.24356, sumUsd: 17.74},
    {date: '16.01.2021', type: 'sell', pair: 'GAS/USD',   sum: 5.6156,    price: 1.77,     sumUsd: 9.97},
    {date: '16.01.2021', type: 'sell', pair: 'ZEC/USD',   sum: 0.2106192, price: 103.1185, sumUsd: 21.72},
    {date: '16.01.2021', type: 'sell', pair: 'ETC/USD',   sum: 0.9041805, price: 7.758931, sumUsd: 7.02},
    {date: '16.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 13.333861, price: 2.9,      sumUsd: 38.67},
    {date: '16.01.2021', type: 'sell', pair: 'LSK/USD',   sum: 20.820847, price: 1.3416,   sumUsd: 27.94},
    {date: '16.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 9.7658973, price: 2.8491,   sumUsd: 27.82},
    {date: '19.01.2021', type: 'sell', pair: 'DASH/USD',  sum: 1.1324465, price: 132.9,    sumUsd: 150.50},
    {date: '19.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 51.69889,  price: 2.8872,   sumUsd: 149.02},
    {date: '27.01.2021', type: 'sell', pair: 'XEM/USD',   sum: 352.9037,  price: 0.2289,   sumUsd: 80.78},
    {date: '27.01.2021', type: 'buy',  pair: 'EOS/USD',   sum: 31.935538, price: 2.555,    sumUsd: 81.60},
    {date: '30.01.2021', type: 'sell', pair: 'XRP/USD',   sum: 385.53027, price: 0.471999, sumUsd: 181.97},
    {date: '31.01.2021', type: 'buy',  pair: 'BCH/USD',   sum: 0.1503759, price: 399,      sumUsd: 60.00},
    {date: '31.01.2021', type: 'buy',  pair: 'ZEC/USD',   sum: 0.7017544, price: 85.49893, sumUsd: 60.00},
    {date: '31.01.2021', type: 'buy',  pair: 'DASH/USD',  sum: 0.3933137, price: 101.7,    sumUsd: 40.00},
    {date: '01.02.2021', type: 'sell', pair: 'TRX/USD',   sum: 5924.0387, price: 0.0345,   sumUsd: 204.38},
    {date: '01.02.2021', type: 'sell', pair: 'EOS/USD',   sum: 120,       price: 3.1969,   sumUsd: 383.63},
    {date: '01.02.2021', type: 'sell', pair: 'EOS/USD',   sum: 31.2806,   price: 3.139002, sumUsd: 98.19},
    {date: '01.02.2021', type: 'buy',  pair: 'BCH/USD',   sum: 0.5083071, price: 413,      sumUsd: 209.91},
    {date: '01.02.2021', type: 'buy',  pair: 'DASH/USD',  sum: 1.8975332, price: 105.246,  sumUsd: 199.71},
    {date: '01.02.2021', type: 'buy',  pair: 'ZEC/USD',   sum: 2.259887,  price: 88.36666, sumUsd: 199.70},
    {date: '01.02.2021', type: 'buy',  pair: 'BTC/USD',   sum: 0.002827,  price: 33780,    sumUsd: 95.50},
    {date: '01.02.2021', type: 'sell', pair: 'BTC/USD',   sum: 0.0028157, price: 33785.8,  sumUsd: 95.14},
    {date: '01.02.2021', type: 'sell', pair: 'BCH/USD',   sum: 0.6562889, price: 416,      sumUsd: 273.02},
    {date: '01.02.2021', type: 'buy',  pair: 'XRP/USD',   sum: 797.14245, price: 0.455,    sumUsd: 362.70},
    {date: '01.02.2021', type: 'sell', pair: 'BTG/USD',   sum: 3.3265727, price: 10,       sumUsd: 33.27},
    {date: '01.02.2021', type: 'sell', pair: 'DASH/USD',  sum: 0.1670108, price: 101.6853, sumUsd: 16.98},
    {date: '01.02.2021', type: 'buy',  pair: 'XRP/USD',   sum: 127.80641, price: 0.42,     sumUsd: 53.68},
    {date: '01.02.2021', type: 'sell', pair: 'DASH/USD',  sum: 0.226,     price: 102.2,    sumUsd: 23.10},
    {date: '01.02.2021', type: 'sell', pair: 'ZEC/USD',   sum: 0.70175,   price: 85.12912, sumUsd: 59.74},
    {date: '01.02.2021', type: 'buy',  pair: 'XRP/USD',   sum: 223.34097, price: 0.371,    sumUsd: 82.86},
    {date: '02.02.2021', type: 'sell', pair: 'ZEC/USD',   sum: 1.1000911, price: 90.94064, sumUsd: 100.04},
    {date: '02.02.2021', type: 'buy',  pair: 'XRP/USD',   sum: 273.82,    price: 0.368,    sumUsd: 100.77},
    {date: '02.02.2021', type: 'sell', pair: 'DASH/USD',  sum: 1.89,      price: 107.25,   sumUsd: 202.71},
    {date: '02.02.2021', type: 'sell', pair: 'ZEC/USD',   sum: 1.149138,  price: 92.79911, sumUsd: 106.64},
    {date: '02.02.2021', type: 'buy',  pair: 'XRP/USD',   sum: 806.57245, price: 0.382,    sumUsd: 308.11},
    {date: '04.02.2021', type: 'sell', pair: 'XRP/USD',   sum: 120,       price: 0.426,    sumUsd: 51.12},
    {date: '05.02.2021', type: 'buy',  pair: 'XRP/USD',   sum: 114,       price: 0.448,    sumUsd: 51.48},
    {date: '14.04.2021', type: 'sell', pair: 'XRP/USD',   sum: 7,         price: 1.92,     sumUsd: 13.44},
    {date: '14.04.2021', type: 'sell', pair: 'XRP/USD',   sum: 9,         price: 1.93,     sumUsd: 17.37},
    {date: '14.04.2021', type: 'buy',  pair: 'EXM/USD',   sum: 202,       price: 0.066234, sumUsd: 13.40},
    {date: '14.04.2021', type: 'buy',  pair: 'DOGE/USD',  sum: 138.102,   price: 0.1254,   sumUsd: 17.32},
    {date: '15.04.2021', type: 'sell', pair: 'DOGE/USD',  sum: 137.68,    price: 0.12656,  sumUsd: 17.43},
    {date: '15.04.2021', type: 'buy',  pair: 'EXM/USD',   sum: 275,       price: 0.0621,   sumUsd: 17.12},
    {date: '18.04.2021', type: 'sell', pair: 'XRP/USD',   sum: 2201,      price: 1.285,    sumUsd: 2828.41},
    {date: '18.04.2021', type: 'sell', pair: 'EXM/USD',   sum: 476,       price: 0.062,    sumUsd: 29.55},
    {date: '18.04.2021', type: 'buy',  pair: 'EXM/USD',   sum: 1118,      price: 0.062593, sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'LSK/USD',   sum: 10.5,      price: 5.48759,  sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'OMG/USD',   sum: 8.4337,    price: 8.2969,   sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'ZRX/USD',   sum: 39.3258,   price: 1.78,     sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'WAVES/USD', sum: 7.4074,    price: 13.5,     sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'QTUM/USD',  sum: 6.2305,    price: 16.05,    sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'BTG/USD',   sum: 1.1025,    price: 90.7,     sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'ZEC/USD',   sum: 0.4032,    price: 248,      sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'DASH/USD',  sum: 0.32679,   price: 306,      sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'XEM/USD',   sum: 750,       price: 0.4,      sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'XMR/USD',   sum: 0.30959,   price: 322.59,   sumUsd: 100.00},
    {date: '18.04.2021', type: 'buy',  pair: 'NEO/USD',   sum: 0.7368,    price: 95,       sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'EOS/USD',   sum: 28.3286,   price: 7.06,     sumUsd: 200.00},
    {date: '18.04.2021', type: 'buy',  pair: 'TRX/USD',   sum: 2130,      price: 0.14096,  sumUsd: 300.00},
    {date: '18.04.2021', type: 'buy',  pair: 'XLM/USD',   sum: 363.63,    price: 0.55,     sumUsd: 200.00},
    {date: '18.04.2021', type: 'buy',  pair: 'ADA/USD',   sum: 236.22,    price: 1.2631,   sumUsd: 300.00},
    {date: '18.04.2021', type: 'buy',  pair: 'BCH/USD',   sum: 0.075268,  price: 930,      sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'DOGE/USD',  sum: 205.882,   price: 0.3339,   sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'LTC/USD',   sum: 0.2545,    price: 274.87,   sumUsd: 70.00},
    {date: '18.04.2021', type: 'buy',  pair: 'XRP/USD',   sum: 226,       price: 1.3259,   sumUsd: 300.00},
    {date: '18.04.2021', type: 'buy',  pair: 'ETH/USD',   sum: 0.018018,  price: 2219.89,  sumUsd: 40.00},
    {date: '18.04.2021', type: 'buy',  pair: 'ETH/USD',   sum: 0.0009377, price: 56520,    sumUsd: 53.00},
    {date: '12.08.2021', type: 'sell', pair: 'XRP/USD',   sum: 954,       price: 1.008,    sumUsd: 959.78},
    {date: '12.08.2021', type: 'buy',  pair: 'EOS/USD',   sum: 200.79,    price: 4.7776,   sumUsd: 959.29},
    {date: '13.08.2021', type: 'sell', pair: 'EOS/USD',   sum: 200,       price: 4.98,     sumUsd: 998.00},
    {date: '13.08.2021', type: 'buy',  pair: 'XRP/USD',   sum: 995.58,    price: 1.04,     sumUsd: 959.29},
    {date: '17.08.2021', type: 'add',  pair: '',          sum: 180.00,    price: 1,        sumUsd: 180.00},
    // in 5000грн >>>>> -23429грн -5000грн = -28429грн
    {date: '17.08.2021', type: 'buy',  pair: 'QTUM/USD',  sum: 5.55,      price: 12.98,    sumUsd: 72.07},
    {date: '17.08.2021', type: 'buy',  pair: 'XEM/USD',   sum: 510.00,    price: 0.212,    sumUsd: 108.00},
    {date: '08.09.2021', type: 'add',  pair: '',          sum: 504.00,    price: 1,        sumUsd: 504.00},
    // in 14000грн >>>>> -28429грн -14000грн = -42429грн
    {date: '08.09.2021', type: 'buy',  pair: 'DOGE/USD',  sum: 747.75,    price: 0.2614,   sumUsd: 195.85},
    {date: '08.09.2021', type: 'buy',  pair: 'XLM/USD',   sum: 299.1,     price: 0.3363,   sumUsd: 100.89},
    {date: '08.09.2021', type: 'buy',  pair: 'BCH/USD',   sum: 0.22269,   price: 672.37,   sumUsd: 150.17},
    {date: '08.09.2021', type: 'buy',  pair: 'LTC/USD',   sum: 0.298011,  price: 185.11,   sumUsd: 55.33},
    {date: '29.09.2021', type: 'sell', pair: 'XLM/USD',   sum: 299.1,     price: 0.2792,   sumUsd: 83.50},
    {date: '29.09.2021', type: 'sell', pair: 'LTC/USD',   sum: 0.298011,  price: 152,      sumUsd: 45.29},
    {date: '29.09.2021', type: 'sell', pair: 'DOGE/USD',  sum: 747.75,    price: 0.206,    sumUsd: 154.03},
    {date: '29.09.2021', type: 'out',  pair: '',          sum: 282.84,    price: 1,        sumUsd: 282.84},
    // out 5509грн >>>>> -42429грн +5509грн = -36920грн
    {date: '29.09.2021', type: 'buy',  pair: 'ADA/USD',   sum: 33.42147,  price: 2.1045,   sumUsd: 70.34},
    {date: '03.10.2021', type: 'add',  pair: '',          sum: 300.00,    price: 1,        sumUsd: 300.00},
    // in 8000грн >>>>> -36920грн -8000грн = -44920грн
    {date: '03.10.2021', type: 'buy',  pair: 'EXM/USD',   sum: 4521.00,   price: 0.0658,   sumUsd: 297.48},
    {date: '05.10.2021', type: 'add',  pair: '',          sum: 706.00,    price: 1,        sumUsd: 706.00},
    // in 20000грн >>>>> -44920грн -20000грн = -64920грн
    {date: '05.10.2021', type: 'buy',  pair: 'XEM/USD',   sum: 4153.00,   price: 0.17,     sumUsd: 706.00},
    {date: '05.10.2021', type: 'add',  pair: '',          sum: 376.00,    price: 1,        sumUsd: 376.00},
    // in 10000грн >>>>> -64920грн -10000грн = -74920грн
    {date: '05.10.2021', type: 'buy',  pair: 'EXM/USD',   sum: 5989.00,   price: 0.064,   sumUsd: 376.00},
    {date: '09.10.2021', type: 'add',  pair: '',          sum: 756.00,    price: 1,       sumUsd: 756.00},
    // in 20000грн >>>>> -74920грн -20000грн = -94920грн
    {date: '09.10.2021', type: 'buy',  pair: 'XRP/USD',   sum: 300.00,    price: 1.076,   sumUsd: 322.8},
    {date: '09.10.2021', type: 'buy',  pair: 'ADA/USD',   sum: 189.75,    price: 2.265,   sumUsd: 429.78},
    {date: '12.10.2021', type: 'sell', pair: 'ADA/USD',   sum: 222.5,     price: 2.136,   sumUsd: 475.26},
    {date: '12.10.2021', type: 'buy',  pair: 'EOS/USD',   sum: 105.37,    price: 4.473,   sumUsd: 471.32},
    {date: '22.10.2021', type: 'sell', pair: 'XRP/USD',   sum: 300.00,    price: 1.1099,  sumUsd: 332.97},
    {date: '22.10.2021', type: 'sell', pair: 'EOS/USD',   sum: 35.00,     price: 4.7614,  sumUsd: 166.65},
    {date: '22.10.2021', type: 'sell', pair: 'XEM/USD',   sum: 953.00,    price: 0.17681, sumUsd: 168.50},
    {date: '22.10.2021', type: 'out',  pair: '',          sum: 668.91,    price: 1,       sumUsd: 668.91},
    // out 17065грн >>>>> -94920грн +17065грн = -77855грн
    {date: '31.10.2021', type: 'sell', pair: 'XEM/USD',   sum: 2200.00,   price: 0.18015, sumUsd: 396.34},
    {date: '31.10.2021', type: 'out',  pair: '',          sum: 395.13,    price: 1,       sumUsd: 395.13},
    // out 5655грн >>>>> -77855грн +5655грн = -72200грн
    // out 4300грн >>>>> -72200грн +4300грн = -67900грн
    {date: '31.10.2021', type: 'sell', pair: 'QTUM/USD',  sum: 5.5339,    price: 14.763,  sumUsd: 81.7},
    {date: '31.10.2021', type: 'out',  pair: '',          sum: 81.46,     price: 1,       sumUsd: 81.46},
    // out 1101грн >>>>> -67900грн +1101грн = -66799грн
    // out 1000грн >>>>> -66799грн +1101грн = -65799грн
]



export { depositShort, depositLong, actions };
