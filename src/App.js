import React, { useState, useEffect } from 'react';
import './App.css';
const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAddition = () => {
    if (validateInputs()) {
      setResult(Number(number1) + Number(number2));
      setError('');
    } else {
      setError('Please enter valid numbers.');
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      setResult(Number(number1) - Number(number2));
      setError('');
    } else {
      setError('Please enter valid numbers.');
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      setResult(Number(number1) * Number(number2));
      setError('');
    } else {
      setError('Please enter valid numbers.');
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (Number(number2) !== 0) {
        setResult(Number(number1) / Number(number2));
        setError('');
      } else {
        setError('Division by zero.');
      }
    } else {
      setError('Please enter valid numbers.');
    }
  };

  const clear = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
    setError('');
  };

  const validateInputs = () => {
    return number1 !== '' && number2 !== '' && !isNaN(Number(number1)) && !isNaN(Number(number2));
  };

  useEffect(() => {
    // Clear the error message when the component mounts.
    setError('');
  }, []);

  return (
    <div className="Box">
      <h2>React Calculator</h2>
      <input type="text" placeholder="Num 1" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <p>
      <input type="text" placeholder="Num 2" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </p>
      <div>
        <button className="btn" onClick={handleAddition}>+</button>
        <button className="btn" onClick={handleSubtraction}>-</button>
        <button className="btn" onClick={handleMultiplication}>*</button>
        <button className="btn" onClick={handleDivision}>/</button>
      </div>
      <div>
        <p>{error}</p>
        <input type="text" placeholder='Result' value={result} disabled />
      </div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Calculator;

