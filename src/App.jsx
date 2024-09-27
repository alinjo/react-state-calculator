import { useState } from "react";
import "./App.css";

function App() {

  const [firstInput, setFirstInput] = useState("0");
  const [secondInput, setSecondInput] = useState("0");
  const [currentOperator, setCurrentOperator] = useState("+");
  const [result, setResult] = useState("0");

  const handleClick = (number, setOperand) => {

    if (setOperand === setFirstInput) {

      setFirstInput(prev => (prev === "0" ? number : prev + number));

    } 
    
    else {

      setSecondInput(prev => (prev === "0" ? number : prev + number));

    }
  };

  const clearOperand = (setOperand) => {

    setOperand("0");

  };

  const selectOperator = (operator) => {

    setCurrentOperator(operator);

  };

  const computeResult = () => {

    const value1 = parseFloat(firstInput);
    const value2 = parseFloat(secondInput);
    let resultValue = 0;

    if (currentOperator === "+") {

      resultValue = value1 + value2;

    } 
    
    else if (currentOperator === "-") {

      resultValue = value1 - value2;

    }
    
    else if (currentOperator === "*") {

      resultValue = value1 * value2;

    } 
    
    else if (currentOperator === "÷") {

      resultValue = value2 !== 0 ? value1 / value2 : "Error";

    } 

    else {

      resultValue = "Error";

    }

    setResult(resultValue.toString());
    
  };

  return (

    <div className="calculator">
      <div className="panel">
        <p>{firstInput}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
            <button key={number} onClick={() => handleClick(number.toString(), setFirstInput)}>
              {number}
            </button>
          ))}
          <button onClick={() => clearOperand(setFirstInput)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{currentOperator}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map(op => (
            <button key={op} onClick={() => selectOperator(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{secondInput}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
            <button key={number} onClick={() => handleClick(number.toString(), setSecondInput)}>
              {number}
            </button>
          ))}
          <button onClick={() => clearOperand(setSecondInput)}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={computeResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
