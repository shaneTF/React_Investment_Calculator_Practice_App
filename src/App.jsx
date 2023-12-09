import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const userInputIsValid = userInput.duration >= 1;

  function handleChange(inputValue, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputValue]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {userInputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter valid input data!</p>
      )}
    </>
  );
}

export default App;
