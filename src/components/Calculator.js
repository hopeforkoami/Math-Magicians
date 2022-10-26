import React, { Component } from 'react';

// eslint-disable-next-line
class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="calc-container">
          <table className="calculator">
            <tbody>
              <tr>
                <td colSpan={4} className="result">
                  0
                </td>
              </tr>
              <tr>
                <td className="num">AC</td>
                <td className="num">+/-</td>
                <td className="num">%</td>
                <td className="action">÷</td>
              </tr>
              <tr>
                <td className="num">7</td>
                <td className="num">8</td>
                <td className="num">9</td>
                <td className="action">x</td>
              </tr>
              <tr>
                <td className="num">4</td>
                <td className="num">5</td>
                <td className="num">6</td>
                <td className="action">-</td>
              </tr>
              <tr>
                <td className="num">1</td>
                <td className="num">2</td>
                <td className="num">3</td>
                <td className="action">+</td>
              </tr>
              <tr>
                <td className="num" colSpan={2}>
                  0
                </td>
                <td className="num">.</td>
                <td className="action">=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculator;
