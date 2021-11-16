import React, { useEffect, useState } from 'react';
// components
import OverViewComponent from './OverViewComponent';
import TransActionsComponent from './TransActionsComponent';

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transActions, setTransAction] = useState([]);

    const addTransAction = (formValues) => {
        const data = {...formValues, id: Date.now()}
        setTransAction([...transActions,data])
    }

    useEffect(() => {
        let newExpense = 0;
        let newIncome = 0;
        transActions.forEach((item) => {
            item.type === "Expense" ? newExpense += parseFloat(item.amount) : newIncome += parseFloat(item.amount)
        })
        setExpense(newExpense)
        setIncome(newIncome)
    } , [transActions])

    return (
        <div >
            <OverViewComponent expense={expense} income={income} expense={expense} addTransAction={addTransAction} />
            <TransActionsComponent transActions={transActions}  />
        </div>
    );
};

export default ExpenseApp;