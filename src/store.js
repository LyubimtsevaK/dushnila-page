import { createStore } from 'redux';

const initialState = {
  co2: '',
  temp: '',
  status: 'normal'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CO2':
      return { ...state, co2: action.payload };
    case 'UPDATE_TEMP':
      return { ...state, temp: action.payload };
    case 'UPDATE_STATUS':
      return { ...state, status: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
