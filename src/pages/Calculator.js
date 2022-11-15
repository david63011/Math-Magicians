import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calc, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const math = (e) => {
    const data = e.target.innerHTML;
    setState((calc) => calculate(calc, data));
  };

  const { total, next, operation } = calc;
  return (
    <div className="cal-wrapper">
      <h1 class="message">Lets do some Math!!</h1>
      <div className="display">
        {total}
        {'  '}
        {operation}
        {'  '}
        {next}
      </div>
      <div className="grid">
        <button className="cal-btn" type="button" onClick={math}>
          AC
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          +/-
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          %
        </button>
        <button className="cal-btn right" type="button" onClick={math}>
          +
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          7
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          8
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          9
        </button>
        <button className="cal-btn right" type="button" onClick={math}>
          x
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          4
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          5
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          6
        </button>
        <button className="cal-btn right" onClick={math} type="button">
          -
        </button>
        <button className="cal-btn" onClick={math} type="button">
          1
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          2
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          3
        </button>
        <button className="cal-btn right" type="button" onClick={math}>
          ÷
        </button>
        <button className="cal-btn zero-btn" type="button" onClick={math}>
          0
        </button>
        <button className="cal-btn" type="button" onClick={math}>
          .
        </button>
        <button className="cal-btn right" type="button" onClick={math}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
