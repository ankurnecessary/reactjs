import { useState } from "react";
import CalculationGrid from "./components/CalculationGrid/CalculationGrid";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
function App() {

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  }


  return (
    <div>

      <Header />

      <InputForm onCalculate={calculateHandler} />

      {!userInput && <p style={{ textAlign: 'center' }}>No data available</p>}
      {userInput && <CalculationGrid calculationData={yearlyData} initialInvestement={userInput['current-savings']} />}

    </div>
  );
}

export default App;
