import React, { useState } from 'react';
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
        console.log(formValues)
    }

    return (
        <div className='ExpenseAppContainer'>
            <OverViewComponent expense={expense} income={income} expense={expense} addTransAction={addTransAction} />
            <TransActionsComponent  />
        </div>
    );
};

export default ExpenseApp;