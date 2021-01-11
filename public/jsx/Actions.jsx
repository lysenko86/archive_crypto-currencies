import React from 'react';

import { actions } from '../../data.js';

class Currencies extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeFilterValue = this.onChangeFilterValue.bind(this);
        this.state = { filterValue: '' };
    }

    onChangeFilterValue(event) {
        const filterValue = event.target.value.toUpperCase();
        this.setState({ filterValue });
    }

    render() {
        const acts = actions.slice().reverse().filter((action) => action.pair.includes(this.state.filterValue));
        return (
            <table className="table table-bordered table-hover table-actions">
                <thead>
                    <tr>
                        <th className="col-date">Дата</th>
                        <th className="col-type">Тип</th>
                        <th className="col-pair">Пара</th>
                        <th className="col-sum">Сума</th>
                        <th className="col-price">Ціна</th>
                        <th className="col-usd">USD</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td colSpan="6">
                            <input type="text" onChange={this.onChangeFilterValue} value={this.state.filterValue} />
                        </td>
                    </tr>
                    {acts.map((action, index) => {
                        const classType = 'color-' + action.type;
                        return (
                            <tr key={index}>
                                <td className="col-date">{action.date}</td>
                                <td className={'col-type ' + classType}>{action.type}</td>
                                <td className="col-pair">{action.pair}</td>
                                <td className="col-sum">{action.sum}</td>
                                <td className="col-price">{action.price}</td>
                                <td className="col-usd">${action.sumUsd}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Currencies;
