import React from 'react';

import { analytics } from '../data.js';

class Currencies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const totalSumAdd = Math.round(analytics.reduce((acc, month) => acc + month.add, 0) * 100) / 100;

        return (
            <table className="table table-bordered table-hover table-analytics">
                <thead>
                    <tr>
                        <th className="col-month">Місяць</th>
                        <th className="col-add">Залив</th>
                        <th className="col-sum">Початок</th>
                        <th className="col-sum">Кінець</th>
                        <th className="col-usd">Ріст, USD</th>
                        <th className="col-percent">Ріст, %</th>
                    </tr>
                </thead>
                <tbody>
                    {analytics.map((month, index) => {
                        const growthUsd = Math.round((month.sumEnd - month.sumBegin - month.add) * 100) / 100;
                        const growthUsdTitle = (growthUsd < 0 ? '-' : '') + '$' + Math.abs(growthUsd);
                        const growthPercent = Math.round((month.sumEnd * 100 / (month.sumBegin + month.add) - 100) * 100) / 100;
                        const classGrowth = growthUsd < 0 ? 'colorMinus' : 'colorPlus';
                        return (
                            <tr key={index}>
                                <td className="col-month">{month.month}</td>
                                <td className="col-add">{month.add ? '$' + month.add : ''}</td>
                                <td className="col-sum">${month.sumBegin}</td>
                                <td className="col-sum">${month.sumEnd}</td>
                                <td className={'col-usd ' + classGrowth}>{growthUsdTitle}</td>
                                <td className={'col-percent ' + classGrowth}>{growthPercent}%</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="col-month">Всього залив:</td>
                        <td className="col-add">${totalSumAdd}</td>
                        <td className="col-sum"></td>
                        <td className="col-sum"></td>
                        <td className="col-usd"></td>
                        <td className="col-percent"></td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default Currencies;
