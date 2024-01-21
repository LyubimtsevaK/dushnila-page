import './App.css';
import Cards from './Components/Cards';
import Temperature from './Components/Temperature';
import Result from './Components/Result';
import React from 'react';
// import store from './store';

function App() {
  
  return (
    <div className='size'>
      <h1 className='dushnila'>ДУШНИЛА</h1>
      <div className='body'>
        <div>
          <Result/>
          <Cards/>
        </div>
        <Temperature/>
      </div>
    </div>
  );
}

export default App;
