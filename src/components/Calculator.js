import React from 'react';

class Calculator extends React.Component {
  cal = (
    <div className="cal-wrapper">
      <input type="text" className="display" placeholder={0} />
      <div className="grid">
        <button className="cal-btn">AC</button>
        <button className="cal-btn"> +/- </button>
        <button className="cal-btn"> % </button>
        <button className="cal-btn right"> + </button>
        <button className="cal-btn"> 7 </button>
        <button className="cal-btn"> 8 </button>
        <button className="cal-btn"> 9 </button>
        <button className="cal-btn right"> * </button>
        <button className="cal-btn"> 4 </button>
        <button className="cal-btn"> 5 </button>
        <button className="cal-btn"> 6 </button>
        <button className="cal-btn right"> - </button>
        <button className="cal-btn"> 1 </button>
        <button className="cal-btn"> 2 </button>
        <button className="cal-btn"> 3 </button>
        <button className="cal-btn right"> + </button>
        <button className="cal-btn zero-btn"> 0 </button>
        <button className="cal-btn"> . </button>
        <button className="cal-btn right"> = </button>
      </div>
    </div>
  );

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.cal;
  }
}

export default Calculator;