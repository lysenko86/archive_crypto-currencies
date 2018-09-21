"use strict";

function roundPrice(price){
    if (Math.abs(price) >= 1000){
        price = Math.round(price);
    } else if (Math.abs(price) >= 100){
        price = Math.round(price * 1000) / 1000;
    } else if (Math.abs(price) >= 1){
        price = Math.round(price * 100000) / 100000
    } else {
        price = Math.round(price * 100000000) / 100000000
    }
    return price;
}

const deposit = [
    {key: 'BTC_USD', title: 'Bitcoin', sum: 0.003729, priceIn: 11250, priceMax: 19331},
    {key: 'ETH_USD', title: 'Ethereum', sum: 0.031936, priceIn: 970, priceMax: 1391},
    {key: 'TRX_USD', title: 'Tron', sum: 249.5, priceIn: 0.023, priceMax: 0.2737},
    {key: 'TRX_USD', title: 'Tron', sum: 100, priceIn: 0.02585, priceMax: 0.2737},
    {key: 'TRX_USD', title: 'Tron', sum: 700, priceIn: 0.02588, priceMax: 0.2737},
    {key: 'TRX_USD', title: 'Tron', sum: 677, priceIn: 0.01774, priceMax: 0.2737},
    {key: 'DASH_USD', title: 'Dash', sum: 0.01, priceIn: 740, priceMax: 1470},
    {key: 'DASH_USD', title: 'Dash', sum: 0.00996, priceIn: 626.104, priceMax: 1470},
    {key: 'BCH_USD', title: 'Bitcoin Cash', sum: 0.03467, priceIn: 478.7, priceMax: 3446},
    {key: 'XRP_USD', title: 'Ripple', sum: 14.9835297, priceIn: 1.1367, priceMax: 3.0515},
    {key: 'XRP_USD', title: 'Ripple', sum: 40.09, priceIn: 1.125, priceMax: 3.0515},
    {key: 'XMR_USD', title: 'Monero', sum: 0.27908, priceIn: 106.85, priceMax: 639.33},
    {key: 'GAS_USD', title: 'Gas', sum: 1.09112, priceIn: 6.95, priceMax: 79.21},
    {key: 'ETC_USD', title: 'Ethereum Classic', sum: 1.0, priceIn: 33.47, priceMax: 44.546},
    {key: 'ETC_USD', title: 'Ethereum Classic', sum: 0.594, priceIn: 29.044, priceMax: 44.546},
    {key: 'EOS_USD', title: 'EOS', sum: 3.992, priceIn: 6.633, priceMax: 20.474},
    {key: 'OMG_USD', title: 'OmiseGO', sum: 1.42628172, priceIn: 4.18, priceMax: 25.307},
    {key: 'OMG_USD', title: 'OmiseGO', sum: 4.624, priceIn: 3.255, priceMax: 25.307},
    {key: 'ADA_USD', title: 'Cardano', sum: 29.94, priceIn: 0.12, priceMax: 1.2655},
    {key: 'ADA_USD', title: 'Cardano', sum: 117, priceIn: 0.0849, priceMax: 1.2655},
    {key: 'ADA_USD', title: 'Cardano', sum: 230, priceIn: 0.06599, priceMax: 1.2655},
    {key: 'ADA_USD', title: 'Cardano', sum: 185.301, priceIn: 0.067, priceMax: 1.2655},
    {key: 'XLM_USD', title: 'Stellar', sum: 9.98, priceIn: 0.244, priceMax: 0.87315},
    {key: 'XLM_USD', title: 'Stellar', sum: 21.6026, priceIn: 0.224945, priceMax: 0.87315},
    {key: 'XLM_USD', title: 'Stellar', sum: 59.8368, priceIn: 0.225, priceMax: 0.87315},
    {key: 'LTC_USD', title: 'Litecoin', sum: 0.03667, priceIn: 60.69, priceMax: 352.616},
    {key: 'LTC_USD', title: 'Litecoin', sum: 0.05, priceIn: 66.2, priceMax: 352.616},
    {key: 'ZEC_USD', title: 'Zcash', sum: 0.04, priceIn: 143.8788, priceMax: 731.37},
    {key: 'NEO_USD', title: 'NEO', sum: 1.9896, priceIn: 24.07989, priceMax: 170.04},
    {key: 'HBZ_USD', title: 'Helbiz', sum: 500, priceIn: 0.0038379, priceMax: 0.0206},
    {key: 'HBZ_USD', title: 'Helbiz', sum: 4130, priceIn: 0.00242, priceMax: 0.0206},
    {key: 'STQ_USD', title: 'Storiqa', sum: 0, priceIn: 0.0022, priceMax: 0.132},
    {key: 'DXT_USD', title: 'Datawallet', sum: 870, priceIn: 0.0115, priceMax: 0.9981},
    {key: 'INK_USD', title: 'Ink', sum: 655, priceIn: 0.0228, priceMax: 0.91597},
    {key: 'XEM_USD', title: 'NEM', sum: 56.62, priceIn: 0.58, priceMax: 1.8892, priceNow: 0.11098},
    {key: 'XVG_USD', title: 'Verge', sum: 209, priceIn: 0.076, priceMax: 0.25177, priceNow: 0.01557},
    {key: 'USD', title: 'Exmo', sum: 0, priceIn: 1, priceMax: 1, priceNow: 1}
];
let totalSumIn = 0;
let totalSumNow = 0;
let totalSumMax = 0;

$.get('https://api.exmo.com/v1/ticker/', {}, function(data){
    if (!data['BTC_USD']){
        console.log(data.error);
    }
    for (let i=0; i<deposit.length; i++){
        const key = deposit[i].key;
        const title = deposit[i].title;
        const item = deposit[i];
        const currencySum = item.sum;
        const priceIn = item.priceIn;
        const priceInSum = currencySum * priceIn;
        const priceNow = item.priceNow ? item.priceNow : (data[key] && data[key].last_trade ? data[key].last_trade : 'error');
        const priceNowSum = currencySum * priceNow;
        const increaseSum = priceNowSum - priceInSum;
        const increaseSumOut = priceNowSum - priceInSum;
        const increasePercent = parseFloat(currencySum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        const priceMax = item.priceMax;
        const priceMaxSum = currencySum * priceMax;
        totalSumIn += priceInSum;
        totalSumNow += priceNowSum;
        totalSumMax += priceMaxSum;
        $('.table-currencies tbody').append($('<tr/>')
            .append($('<td/>', {text: title + ' (' + key.split('_')[0] + ')'}))
            .append($('<td/>', {text: roundPrice(currencySum)}))
            .append($('<td/>', {text: roundPrice(priceIn) + '$'}))
            .append($('<td/>', {text: roundPrice(priceInSum) + '$'}))
            .append($('<td/>', {html: '<strong>' + roundPrice(priceNow) + '$</strong>'}))
            .append($('<td/>', {text: roundPrice(priceNowSum) + '$'}))
            .append($('<td/>', {text: roundPrice(increaseSum) + '$', class: increaseSum >= 0 ? 'colorPlus' : 'colorMinus'}))
            .append($('<td/>', {text: increasePercent + '%', class: increasePercent >= 0 ? 'colorPlus' : 'colorMinus'}))
            .append($('<td/>', {text: roundPrice(priceMax) + '$'}))
            .append($('<td/>', {html: '<input class="priceOut" type="text" value="' + roundPrice(priceNow) + '"/> $'}))
            .append($('<td/>', {text: roundPrice(priceNowSum) + '$'}))
            .append($('<td/>', {text: increasePercent + '%'}))
        );
    }
    const totalIncreaseSum = totalSumNow - totalSumIn;
    const totalIncreasePercent = Math.round(totalIncreaseSum * 100 / totalSumIn / 100 * 10000) / 100;
    $('.table-currencies tfoot').append($('<tr/>')
        .append($('<td/>', {text: 'Загалом:'}))
        .append($('<td/>')).append($('<td/>'))
        .append($('<td/>', {text: roundPrice(totalSumIn) + '$'}))
        .append($('<td/>'))
        .append($('<td/>', {text: roundPrice(totalSumNow) + '$'}))
        .append($('<td/>', {text: roundPrice(totalIncreaseSum) + '$', class: totalIncreaseSum >= 0 ? 'colorPlus' : 'colorMinus'}))
        .append($('<td/>', {text: roundPrice(totalIncreasePercent) + '%', class: totalIncreasePercent >= 0 ? 'colorPlus' : 'colorMinus'}))
        .append($('<td/>', {text: roundPrice(totalSumMax) + '$'}))
        .append($('<td/>'))
        .append($('<td/>', {text: roundPrice(totalSumNow) + '$'}))
        .append($('<td/>', {text: roundPrice(totalIncreasePercent) + '%'}))
    );
});

$(function(){
    $('.table-currencies').on('keyup', '.priceOut', function(){
        const currencySum = $(this).closest('tr').find('td:eq(1)').text();
        const price = $(this).val();
        const totalSum = roundPrice(price * currencySum);
        const priceInSum = $(this).closest('tr').find('td:eq(3)').text().replace('$', '');
        const increaseSum = totalSum - priceInSum;
        const totalPercent = parseFloat(currencySum) === 0 ? 0 : Math.round(increaseSum * 100 / priceInSum / 100 * 10000) / 100;
        $(this).closest('td').next().text(totalSum + '$');
        $(this).closest('td').next().next().text(totalPercent + '%');
        let totalSumOut = 0;
        $(this).closest('.table-currencies tbody').find('tr').each(function(){
            const outSum = $(this).find('td:eq(-2)').text().replace('$', '');
            totalSumOut += parseFloat(outSum);
        });
        totalSumOut = roundPrice(totalSumOut);
        const totalInSum = $('.table-currencies tfoot tr td:eq(3)').text().replace('$', '');
        const totalIncreaseSum = totalSumOut - totalInSum;
        const totalPercentOut = totalSumOut === 0 ? 0 : Math.round(totalIncreaseSum * 100 / totalInSum / 100 * 10000) / 100;
        $('.table-currencies tfoot tr td:eq(-2)').text(totalSumOut + '$');
        $('.table-currencies tfoot tr td:eq(-1)').text(totalPercentOut + '%');
    });
});
