import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  math = (e) => {
    const data = e.target.innerHTML;
    const calcObj = calculate(this.state, data);
    this.setState(calcObj);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="cal-wrapper">
        <div className="display">
            <div className="total">{total}</div>
            <div className="next">{next}</div>
            <div className="operation">{operation}</div>
            </div>
        <div className="grid">
          <button className="cal-btn" type="button" onClick={this.math}>AC</button>
          <button className="cal-btn" type="button" onClick={this.math}>+/-</button>
          <button className="cal-btn" type="button" onClick={this.math}>%</button>
          <button className="cal-btn right" type="button" onClick={this.math}>+</button>
          <button className="cal-btn" type="button" onClick={this.math}>7</button>
          <button className="cal-btn" type="button" onClick={this.math}>8</button>
          <button className="cal-btn" type="button" onClick={this.math}>9</button>
          <button className="cal-btn right" type="button" onClick={this.math}>x</button>
          <button className="cal-btn" type="button" onClick={this.math}>4</button>
          <button className="cal-btn" type="button" onClick={this.math}>5</button>
          <button className="cal-btn" type="button" onClick={this.math}>6</button>
          <button className="cal-btn right" onClick={this.math} type="button">-</button>
          <button className="cal-btn" onClick={this.math} type="button">1</button>
          <button className="cal-btn" type="button" onClick={this.math}>2</button>
          <button className="cal-btn" type="button" onClick={this.math}>3</button>
          <button className="cal-btn right" type="button" onClick={this.math}>÷</button>
          <button className="cal-btn zero-btn" type="button" onClick={this.math}>0</button>
          <button className="cal-btn" type="button" onClick={this.math}>.</button>
          <button className="cal-btn right" type="button" onClick={this.math}>=</button>
        </div>
      </div>
    );
  }
} 
export default Calculator;

