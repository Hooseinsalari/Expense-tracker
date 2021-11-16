import React from "react";

const TransActionsComponent = ({ transActions }) => {
  return (
    <div>
      {transActions.map((item) => (
        <div className={`result ${item.type === `Expense` ? `resultExpense` : `resultIncome`}`} key={item.id}>
          <p className="descResult">{item.desc}</p>
          <div className="twoValue">
              <p className={`${item.type === `Expense`?`expenseType`:`incomeType`}`}>{`${item.type} - ${item.amount}$`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransActionsComponent;
