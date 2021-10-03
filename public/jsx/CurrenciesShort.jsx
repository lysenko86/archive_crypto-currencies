import React from "react";

import { depositShort } from "../../data.js";

class CurrenciesShort extends React.Component {
  constructor(props) {
    super(props);
    this.roundPrice = this.roundPrice.bind(this);
    this.roundUsd = this.roundUsd.bind(this);
    this.state = {
      currencies: {},
      dataIsLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.exmo.com/v1/ticker/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          currencies: data,
          dataIsLoaded: data["BTC_USD"],
        });
      });
  }

  roundPrice(price) {
    const abs = Math.abs(price);
    if (abs >= 1000) {
      price = Math.round(price);
    } else if (abs >= 100) {
      price = Math.round(price * 1000) / 1000;
    } else if (abs >= 1) {
      price = Math.round(price * 100000) / 100000;
    } else {
      price = Math.round(price * 100000000) / 100000000;
    }
    return String(price).substring(0, 7);
  }

  roundUsd(price) {
    return Math.round(price * 100) / 100;
  }

  render() {
    const { dataIsLoaded, currencies } = this.state;

    let totalSumIn = 0;
    let totalSumNow = 0;
    depositShort.map((currency) => {
      if (currency.key === "topHead") {
        return false;
      }
      const lastTrade =
        (currencies[currency.key] && currencies[currency.key].last_trade) || 0;
      totalSumIn += currency.priceIn * currency.sum;
      totalSumNow += (currency.priceNow || lastTrade) * currency.sum;
    });
    const totalIncreaseSum = this.roundUsd(totalSumNow - totalSumIn);
    const totalIncreasePercent =
      Math.round(((totalIncreaseSum * 100) / totalSumIn / 100) * 10000) / 100;
    const growthClass = totalIncreaseSum < 0 ? "colorMinus" : "colorPlus";

    return !dataIsLoaded ? (
      <div className="loading">Завантажуються дані...</div>
    ) : (
      <table className="table table-bordered table-hover table-currencies">
        <thead>
          <tr>
            <th className="col-name" colSpan="6">
              Short Deposit
            </th>
          </tr>
          <tr>
            <th className="col-name">Валюта</th>
            <th className="col-sum">Сума</th>
            <th className="col-price-in">Закупив</th>
            <th className="col-price-now">Ціна</th>
            <th className="col-increase-now">Ріст, $</th>
            <th className="col-increase-now-percent">Ріст, %</th>
          </tr>
        </thead>
        <tbody>
          {depositShort.map((currency, index) => {
            if (currency.key === "topHead") {
              return (
                <tr key={index}>
                  <td className="col-top" colSpan="8">
                    {currency.title}
                  </td>
                </tr>
              );
            }
            const exmo = this.state.currencies[currency.key];
            const cyrPriceNow =
              currency.priceNow || (exmo && exmo.last_trade) || "error";
            const cyrTitle = currency.title;
            const cyrCode = currency.key.split("_")[0];
            const cyrSum = this.roundPrice(currency.sum);
            const priceIn = this.roundPrice(currency.priceIn);
            const usdSumIn = this.roundUsd(currency.priceIn * currency.sum);
            const usdSumInTitle = "Сума закупа: $" + usdSumIn;
            const priceNow = this.roundPrice(cyrPriceNow);
            const usdSumNow = this.roundUsd(cyrPriceNow * currency.sum);
            const usdSumNowTitle = "Сума зараз: $" + usdSumNow;
            const increaseSum = this.roundUsd(usdSumNow - usdSumIn);
            const increaseSumTitle = !increaseSum
              ? ""
              : (increaseSum < 0 ? "-" : "") + "$" + Math.abs(increaseSum);
            const increasePercent =
              parseFloat(currency.sum) === 0
                ? 0
                : Math.round(((increaseSum * 100) / usdSumIn / 100) * 10000) /
                  100;
            const growthClass = increaseSum < 0 ? "colorMinus" : "colorPlus";
            return (
              <tr key={index}>
                <td className="col-name col-tip" title={cyrTitle}>
                  {cyrCode}
                </td>
                <td className="col-sum">{cyrSum}</td>
                <td className="col-price-in col-tip" title={usdSumInTitle}>
                  {"$" + priceIn}
                </td>
                <td className="col-price-now col-tip" title={usdSumNowTitle}>
                  {"$" + priceNow}
                </td>
                <td className={"col-increase-now " + growthClass}>
                  {increaseSumTitle}
                </td>
                <td className={"col-increase-now-percent " + growthClass}>
                  {increasePercent}%
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="col-name">Total:</td>
            <td className="col-sum"></td>
            <td className="col-price-in">{"$" + this.roundUsd(totalSumIn)}</td>
            <td className="col-price-now">
              {"$" + this.roundUsd(totalSumNow)}
            </td>
            <td className={"col-increase-now " + growthClass}>
              {"$" + totalIncreaseSum}
            </td>
            <td className={"col-increase-now-percent " + growthClass}>
              {totalIncreasePercent + "%"}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default CurrenciesShort;
