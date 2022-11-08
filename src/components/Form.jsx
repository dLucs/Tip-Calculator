import iconDollar from "../assets/images/icon-dollar.svg";
import iconPerson from "../assets/images/icon-person.svg";

const Form = ({
  handleBillInput,
  bill,
  handleTipInput,
  handleCustomTipInput,
  handlePeopleInput,
  people,
}) => {
  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label htmlFor="bill">Bill</label>
          <p className="error"></p>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            id="bill"
            pattern="^\d*(\.\d{0,2})?$"
            step="0.01"
            onChange={handleBillInput}
            value={bill}
          />
          <img src={iconDollar} aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-group">
        <p>Selected Tip %</p>
        <div className="tip-inputs">
          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              value=".05"
              onChange={handleTipInput}
            />
            <div className="tip-button">5%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              value=".10"
              onChange={handleTipInput}
            />
            <div className="tip-button">10%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              value=".15"
              onChange={handleTipInput}
            />
            <div className="tip-button">15%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              value=".25"
              onChange={handleTipInput}
            />
            <div className="tip-button">25%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              value=".5"
              onChange={handleTipInput}
            />
            <div className="tip-button">50%</div>
          </div>
          <div className="tip-amount">
            <input
              type="number"
              name="custom-tip"
              onChange={handleCustomTipInput}
            />
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label htmlFor="people">Number of People</label>
          {(people === "" || !people) && <p className="error">Can't be zero</p>}
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            id="people"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            onChange={handlePeopleInput}
            value={people}
          />
          <img src={iconPerson} aria-hidden="true" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
