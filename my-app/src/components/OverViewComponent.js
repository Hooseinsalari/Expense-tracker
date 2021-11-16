import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p className="expenseAmount">{`Balance: ${income - expense} $`}</p>
        <button className={`btn ${isShow? `cancelBtn` : `addBtn`}` } onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {
          isShow && <TransActionForm addTransAction={addTransAction} />
      }
      <div className="bottonSection">
        <p className={"expenseColor expenseAmount"}>{`Expense: ${expense} $`}</p>
        <p className={"incomeColor expenseAmount"}  >{`Income: ${income} $`}</p>
      </div>
    </div>
  );
};

export default OverViewComponent;
