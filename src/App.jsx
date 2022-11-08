import { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";

import logo from "../src/assets/images/logo.svg";

function App() {
  const [bill, setBill] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState("");

  const handleBillInput = (event) => {
    setBill(event.target.value);
  };
  const handleTipInput = (event) => {
    setTipAmount(event.target.value);
  };
  const handleCustomTipInput = (event) => {
    setTipAmount(event.target.value / 100);
  };

  const handlePeopleInput = (event) => {
    setPeople(event.target.value);
  };
  const handleReset = () => {
    window.location.reload(false);
  };

  console.log(bill);
  return (
    <div className="app">
      <img src={logo} alt="logo" />
      <div className="container">
        <Form
          handleBillInput={(event) => handleBillInput(event)}
          handleTipInput={(event) => handleTipInput(event)}
          handleCustomTipInput={(event) => handleCustomTipInput(event)}
          handlePeopleInput={(event) => handlePeopleInput(event)}
          bill={bill}
          tipAmount={tipAmount}
          people={people}
        />
        <Display
          bill={bill}
          tipAmount={tipAmount}
          people={people}
          handleReset={() => handleReset()}
        />
      </div>
    </div>
  );
}

export default App;
