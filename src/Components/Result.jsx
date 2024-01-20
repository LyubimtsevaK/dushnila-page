import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

const Result = () => {

    const co2 = useSelector(state => state.co2);
    const temp = useSelector(state => state.temp);
    const status = useSelector(state => state.status);
   
    const result = () => {
        if (co2 > 800 && temp <= 27) {
            return('CO2 превышает норму');
        } else if (co2 <= 800 && temp > 27) {
            return('Температура превышает норму');
        } else if (co2 > 800 && temp > 27) {
            return('Все показатели превышают норму');
        } else {
            return('Все показатели в норме');
        }
    }

    return (
        <div>
            <div className={'count' + (status !== 'normal' ? ' alt' : '')}>
                <h1 className='resultText'>{status === 'normal' ? 'Душнила доволен вами' : 'Душнила не доволен вами'}</h1>
                <p className='pResult'>{result()}</p>
            </div>
        </div>
    );
};

export default Result;