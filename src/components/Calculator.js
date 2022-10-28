import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  actionHandler = (e) => {
    const calcul = calculate(this.state, e.target.value);
    this.setState(calcul);
  }

  renderTdElement = (classValue, valeur, action) => (
    <td className={classValue}>
      <button type="button" value={valeur} onClick={action}>{valeur}</button>
    </td>
  )

  render() {
    const { total, operation, next } = this.state;
    return (
      <div>
        <div className="calc-container">
          <table className="calculator">
            <tbody>
              <tr>
                <td colSpan={4} className="result">
                  {total}
                  {operation}
                  {next}
                </td>
              </tr>
              <tr>
                {this.renderTdElement('num', 'AC', this.actionHandler)}
                {this.renderTdElement('num', '+/-', this.actionHandler)}
                {this.renderTdElement('num', '%', this.actionHandler)}
                {this.renderTdElement('action', '÷', this.actionHandler)}
              </tr>
              <tr>
                {this.renderTdElement('num', '7', this.actionHandler)}
                {this.renderTdElement('num', '8', this.actionHandler)}
                {this.renderTdElement('num', '9', this.actionHandler)}
                {this.renderTdElement('action', 'x', this.actionHandler)}
              </tr>
              <tr>
                {this.renderTdElement('num', '4', this.actionHandler)}
                {this.renderTdElement('num', '5', this.actionHandler)}
                {this.renderTdElement('num', '6', this.actionHandler)}
                {this.renderTdElement('action', '-', this.actionHandler)}
              </tr>
              <tr>
                {this.renderTdElement('num', '1', this.actionHandler)}
                {this.renderTdElement('num', '2', this.actionHandler)}
                {this.renderTdElement('num', '3', this.actionHandler)}
                {this.renderTdElement('action', '+', this.actionHandler)}
              </tr>
              <tr>
                <td className="num" colSpan={2}>
                  0
                </td>
                {this.renderTdElement('num', '.', this.actionHandler)}
                {this.renderTdElement('action', '=', this.actionHandler)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculator;
