// actions.js


export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const addValue = (value) => {
    return {
      type: 'ADD_VALUE',
      payload: value,
    };
  };
  
  export const setValue = (value) => {
    return {
      type: 'SET_VALUE',
      payload: value,
    };
  };
  