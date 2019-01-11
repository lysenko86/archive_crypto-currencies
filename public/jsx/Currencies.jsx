import React from 'react';

class Currencies extends React.Component{
    render(){
        return (<div className="page-currencies">
            <table class="table table-bordered table-currencies"><thead><tr>
                <th class="col-name">Валюта</th>
                <th class="col-sum">Сума</th>
                <th class="col-price-in">Ціна закупа, $</th>
                <th class="col-sum-in">Сума закупа, $</th>
                <th class="col-price-now">Ціна зараз, $</th>
                <th class="col-sum-now">Сума зараз, $</th>
                <th class="col-increase-now">Ріст, $</th>
                <th class="col-increase-now-percent">Ріст, %</th>
                <th class="col-price-max">Макс, $</th>
                <th class="col-price-out">Ціна продажу, $</th>
                <th class="col-sum-out">Сума продажу, $</th>
                <th class="col-increase-out-percent">Ріст продажу, %</th>
                <th class="col-scrollbar"></th>
            </tr></thead></table>
            <div class="table-currencies-container">
                <table class="table table-bordered table-hover table-currencies"><tbody></tbody></table>
            </div>
            <table class="table table-bordered table-currencies"><tfoot></tfoot></table>
        </div>)
    }
}

export default Currencies;
