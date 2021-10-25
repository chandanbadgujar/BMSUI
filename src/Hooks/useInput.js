import React, { useState } from 'react';


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = React.useState('');
    const [isTouched, setIsTouched] = React.useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    function valueChangeHandler(event) {
        setEnteredValue(event.target.value);
    }    
    function inputBlurHandler(event) {
        setIsTouched(true);
    }
    function setValueHandler(value) {
        setEnteredValue(value);
    } 

    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError, 
        valueChangeHandler, 
        inputBlurHandler,
        reset,
        setValueHandler
    }
};

export default useInput;