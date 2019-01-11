import React from 'react';

class Home extends React.Component{
    render(){
        return (<div className="page-home">
            <h1>Вітаємо в сервісі CryptoCurrencies!</h1>
    		<div className="descr">Цей сервіс створено, щоб допомогти кожному керувати своїм криптовалютним активом.</div>
    		<div className="descr"><strong>Це безпечно та повністю анонімно :)</strong> Ви не надаєте нам ніяких особистих даних. Всі розрахунки коштів - просто числа.</div>
        </div>)
    }
}

export default Home;
