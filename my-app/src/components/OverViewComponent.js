import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {
          isShow && <TransActionForm addTransAction={addTransAction} />
      }
      <div className="bottonSection">
        <p>Expense: {expense}</p>
        <p>Income: {income}</p>
      </div>
    </div>
  );
};

export default OverViewComponent;
