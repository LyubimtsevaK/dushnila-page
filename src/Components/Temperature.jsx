import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateCO2, updateTemp, updateStatus } from '../actions';

const Temperature = () => {
  const co2 = useSelector(state => state.co2);
  const temp = useSelector(state => state.temp);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();

  const get_indicators = () => {
    fetch('http://dushnila.gooddelo.com/data')
    .then(response => response.json())
    .then(data => {
      dispatch(updateCO2(data.co2));
      dispatch(updateTemp(data.temp));

      if (data.co2 > 800 || data.temp > 27) {
        dispatch(updateStatus('exceeded'));
      } else {
        dispatch(updateStatus('normal'));
      }
    });
  }

  useEffect(() => {
    get_indicators()

    const interval = setInterval(() => {get_indicators()}, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={'borderTemp' + (status !== 'normal' ? ' alt' : '')}>
        <h1 className='temperatureText'>{Math.round(temp * 10) / 10} ℃</h1>
        <p className='pText'>Температура</p>
        <h2 className='co2Text'>{Math.round(co2)} ppm</h2>
        <p className='p2Text'>CO2</p>
      </div>
    </div>
  );
};

export default Temperature;