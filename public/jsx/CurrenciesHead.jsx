import React from 'react';

class CurrenciesHead extends React.Component{
    render(){
        return <table className="table table-bordered table-currencies"><thead><tr>
            <th className="col-name">Валюта</th>
            <th className="col-sum">Сума</th>
            <th className="col-price-in">Ціна закупа, $</th>
            <th className="col-sum-in">Сума закупа, $</th>
            <th className="col-price-now">Ціна зараз, $</th>
            <th className="col-sum-now">Сума зараз, $</th>
            <th className="col-increase-now">Ріст, $</th>
            <th className="col-increase-now-percent">Ріст, %</th>
            <th className="col-price-max">Макс, $</th>
            <th className="col-price-out">Ціна продажу, $</th>
            <th className="col-sum-out">Сума продажу, $</th>
            <th className="col-increase-out-percent">Ріст продажу, %</th>
            <th className="col-scrollbar"></th>
        </tr></thead></table>
    }
}

export default CurrenciesHead;
