import React,{useReducer} from 'react';

const INCREMENT_COUNT ='Increament';
const SET_VALUE_TO_ADD ='SetValueToAdd';
const DECREMENT_COUNT ='decreament';
const ADD_VALUE_TO_COUNT ='addValueToCount';

const reducer =(state,action) =>{
    switch(action.type){
        case INCREMENT_COUNT:
            return{
                ...state,
                count:state.count +1
            }
        case DECREMENT_COUNT:
            return{
                ...statep,
                count:state.count -1
            }    
        case SET_VALUE_TO_ADD:
            return{
                ...state,
                ValueToAdd: action.payload
            }  
        case ADD_VALUE_TO_COUNT:
            return{
                ...state,
                ValueToCount: state.count + action.payload
            }      
    }
}

export default reducer;