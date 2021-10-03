import React from "react";

import { depositLong } from "../../data.js";

class CurrenciesLong extends React.Component {
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

    let totalSumNow = 0;
    depositLong.map((currency) => {
      if (currency.key === "topHead") {
        return false;
      }
      const lastTrade =
        (currencies[currency.key] && currencies[currency.key].last_trade) || 0;
      totalSumNow += (currency.priceNow || lastTrade) * currency.sum;
    });
    totalSumNow = this.roundUsd(totalSumNow);

    return !dataIsLoaded ? (
      <div className="loading">Завантажуються дані...</div>
    ) : (
      <table className="table table-bordered table-hover table-currencies">
        <thead>
          <tr>
            <th className="col-name" colSpan="6">
              Long Deposit
            </th>
          </tr>
          <tr>
            <th className="col-name">Валюта</th>
            <th className="col-sum">Сума</th>
            <th className="col-price-now">Ціна</th>
            <th className="col-sum">Всього</th>
          </tr>
        </thead>
        <tbody>
          {depositLong.map((currency, index) => {
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
            const priceNow = this.roundPrice(cyrPriceNow);
            const usdSumNow = this.roundUsd(cyrPriceNow * currency.sum);
            return (
              <tr key={index}>
                <td className="col-name col-tip" title={cyrTitle}>
                  {cyrCode}
                </td>
                <td className="col-sum">{cyrSum}</td>
                <td className="col-price-now col-tip">{"$" + priceNow}</td>
                <td className="col-sum colorPlus">{"$" + usdSumNow}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="col-name">Total:</td>
            <td className="col-sum"></td>
            <td className="col-price-now"></td>
            <td className="col-sum colorPlus">{"$" + totalSumNow}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default CurrenciesLong;
