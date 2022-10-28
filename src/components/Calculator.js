import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line
function Calculator() {
  const [state, updatestate] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const actionHandler = (e) => {
    const calcul = calculate(state, e.target.value);
    updatestate(calcul);
  };

  const renderTdElement = (classValue, valeur, action) => (
    <td className={classValue}>
      <button type="button" value={valeur} onClick={action}>{valeur}</button>
    </td>
  );

  return (
    <div>
      <div className="calc-container">
        <table className="calculator">
          <tbody>
            <tr>
              <td colSpan={4} className="result">
                {state.total}
                {state.operation}
                {state.next}
              </td>
            </tr>
            <tr>
              {renderTdElement('num', 'AC', actionHandler)}
              {renderTdElement('num', '+/-', actionHandler)}
              {renderTdElement('num', '%', actionHandler)}
              {renderTdElement('action', '÷', actionHandler)}
            </tr>
            <tr>
              {renderTdElement('num', '7', actionHandler)}
              {renderTdElement('num', '8', actionHandler)}
              {renderTdElement('num', '9', actionHandler)}
              {renderTdElement('action', 'x', actionHandler)}
            </tr>
            <tr>
              {renderTdElement('num', '4', actionHandler)}
              {renderTdElement('num', '5', actionHandler)}
              {renderTdElement('num', '6', actionHandler)}
              {renderTdElement('action', '-', actionHandler)}
            </tr>
            <tr>
              {renderTdElement('num', '1', actionHandler)}
              {renderTdElement('num', '2', actionHandler)}
              {renderTdElement('num', '3', actionHandler)}
              {renderTdElement('action', '+', actionHandler)}
            </tr>
            <tr>
              <td className="num" colSpan={2}>
                <button type="button" value="0" onClick={actionHandler}>0</button>

              </td>
              {renderTdElement('num', '.', actionHandler)}
              {renderTdElement('action', '=', actionHandler)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
