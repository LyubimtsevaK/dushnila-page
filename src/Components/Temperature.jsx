import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';

const Temperature = () => {

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
 
   
    return (
        <div>
            <div className={'borderTemp' + (status !== 'normal' ? ' alt' : '')}>
                <h1 className='temperatureText'>{Math.round(temp*10)/10} ℃</h1>
                <p className='pText'>Температура</p>
                <h2 className='co2Text'>{Math.round(co2)} ppm</h2>
                <p className='p2Text'>CO2</p>
            </div>
        </div>
    );
};


export default Temperature;