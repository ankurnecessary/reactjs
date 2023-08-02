import styles from './CalculationGrid.module.css';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const CalculationGrid = (props) => {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.calculationData.map(dataPerYear =>
                    <tr key={dataPerYear.year}>
                        <td>{dataPerYear.year}</td>
                        <td>{formatter.format(dataPerYear.savingsEndOfYear)}</td>
                        <td>{formatter.format(dataPerYear.yearlyInterest)}</td>
                        <td>{formatter.format(dataPerYear.savingsEndOfYear - (+props.initialInvestement + (dataPerYear.yearlyContribution * dataPerYear.year)))}</td>
                        <td>{formatter.format(+props.initialInvestement + (dataPerYear.yearlyContribution * dataPerYear.year))}</td>
                    </tr>
                )}

            </tbody>
        </table>
    );
}

export default CalculationGrid;