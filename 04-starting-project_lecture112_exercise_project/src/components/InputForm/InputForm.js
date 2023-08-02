import { useState } from 'react';
import styles from './InputForm.module.css';

const initialCalculatorFormState = {
    "current-savings": 0
    , "yearly-contribution": 0
    , "expected-return": 0
    , "duration": 0
};

const InputForm = (props) => {

    const [calculatorValues, setCalculatorValues] = useState(initialCalculatorFormState);

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onCalculate(calculatorValues);
    }

    const onReset = (event) => {
        event.preventDefault();
        setCalculatorValues(initialCalculatorFormState);
        props.onCalculate(null);
    }

    const calculatorValueChangeHandler = (fieldName, value) => {
        setCalculatorValues((previousValue) => ({
            ...previousValue
            , [fieldName]: value
        }))
    }

    return (
        <form className={styles.form} onSubmit={onFormSubmit} onReset={onReset}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={calculatorValues['current-savings']} onChange={(event) => {
                        calculatorValueChangeHandler("current-savings", event.target.value);
                    }} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={calculatorValues['yearly-contribution']} onChange={(event) => {
                        calculatorValueChangeHandler("yearly-contribution", event.target.value);
                    }} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={calculatorValues['expected-return']} onChange={(event) => {
                        calculatorValueChangeHandler("expected-return", event.target.value);
                    }} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={calculatorValues['duration']} onChange={(event) => {
                        calculatorValueChangeHandler("duration", event.target.value);
                    }} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default InputForm;