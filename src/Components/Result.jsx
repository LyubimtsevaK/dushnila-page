import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';

const Result = () => {

    const co2 = useSelector(state => state.co2);
    const temp = useSelector(state => state.temp);
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
        fetch('http://dushnila.gooddelo.com/data')
            .then(response => response.json())
            .then(data => {
            dispatch({ type: 'UPDATE_CO2', payload: data.co2 });
            dispatch({ type: 'UPDATE_TEMP', payload: data.temp });

            if (data.co2 > 800 || data.temp > 27) {
                dispatch({ type: 'UPDATE_STATUS', payload: 'exceeded' });
            } else {
                dispatch({ type: 'UPDATE_STATUS', payload: 'normal' });
            }
            });
        }, 60000);

        return () => clearInterval(interval);
    }, []);
   
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