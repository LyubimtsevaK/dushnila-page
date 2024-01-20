export const updateCO2 = (co2) => {
    return {
      type: 'UPDATE_CO2',
      payload: co2
    };
  };
  
  export const updateTemp = (temp) => {
    return {
      type: 'UPDATE_TEMP',
      payload: temp
    };
  };
  
  export const updateStatus = (status) => {
    return {
      type: 'UPDATE_STATUS',
      payload: status
    };
  };