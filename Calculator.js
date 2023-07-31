import React, { useState } from 'react';


const Calculator = () => {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleClear = () => {
    setInputValue('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
        setResult(eval(inputValue));
        console.log(eval(inputValue));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
         <nav>
                <div class='d-flex justify-content-around' style={{backgroundColor:'lightgrey'}}>
                    <div class="btn btn-lg">
                        Home
                    </div>
                    <div class="btn btn-lg ">Clock</div>
                    <div class="btn btn-lg btn-primary active">Calender</div>
                    <div class="btn btn-lg">Employee Data</div>
                </div>
            </nav>
      <h2>Simple Calculator</h2>
      <div>
      <div className="display">{inputValue || result}</div>
      <div >
        <div>
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button></div>
        <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button></div>
        <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        {/* <button onClick={() => handleButtonClick('*')}>*</button></div> */}
        <button onClick={() => handleCalculate()}>=</button></div>
        {/* <button onClick={() => handleButtonClick('0')}>0</button> */}
        
      </div></div>
    </div>
  );
};

export default Calculator;
