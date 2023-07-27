import React, { useState } from "react";
import "./Cal.css";

const Calculator1 = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (num) => {
    if (displayValue === "0" || displayValue === "Error") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + num.toString());
    }
  };

  const handleOperatorClick = (op) => {
    setPreviousValue(parseFloat(displayValue));
    setDisplayValue((prevDisplay) => prevDisplay + (op));
    setOperation(op);
  };

  const handleEqualClick = () => {
    const currentVal = parseFloat(displayValue);
    let result;
    switch (operation) {
      case "+":
        result = previousValue + currentVal;
        break;
      case "-":
        result = previousValue - currentVal;
        break;
      case "*":
        result = previousValue * currentVal;
        break;
      case "/":
        result = previousValue / currentVal;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div>
    <h3>CALCULATOR</h3>
    <div className="calculator">
        
      <div className="display">{displayValue}</div>
      <div className="buttons" >
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>

        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>

        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleEqualClick}>=</button>
        
        <button onClick={handleClearClick}>C</button>
      </div>
    </div></div>
  );
};

export default Calculator1;
        