const Display = ({ bill, tipAmount, people, handleReset }) => {
  const calculatedTip = ((bill * tipAmount) / people).toFixed(2);
  const total = (bill / people + (bill * tipAmount) / people).toFixed(2);
  return (
    <div className="display">
      <div className="display-wrapper">
        <div className="display-group">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ Person</p>
          </div>
          <div className="display-amount">
            <p className="value">${people === "" ? "0.00" : calculatedTip}</p>
          </div>
        </div>
        <div className="display-group">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ Person</p>
          </div>
          <div className="display-amount">
            <p className="value">${people === "" ? "0.00" : total}</p>
          </div>
        </div>
      </div>
      {!people || !bill || !tipAmount ? (
        <button className="btn" disabled>
          RESET
        </button>
      ) : (
        <button className="btn" onClick={handleReset}>
          RESET
        </button>
      )}
    </div>
  );
};

export default Display;
