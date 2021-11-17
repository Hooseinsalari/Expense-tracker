import React, { useEffect, useState } from "react";

const TransActionsComponent = ({ transActions }) => {
  const [searchItem, setSearchItem] = useState("")
  const [filteredTnx, setFilteredTnx] = useState(transActions)

  const filteredTransactions = (search) => {
    if(!search || search === ""){
      setFilteredTnx(transActions)
      return
    }
    const filter = transActions.filter((item) => item.desc.toLowerCase().includes(search.toLowerCase()))
    setFilteredTnx(filter)
  }

  const changeHandler = (event) => {
    setSearchItem(event.target.value);
    filteredTransactions(event.target.value)
  }

  useEffect(() => {
    filteredTransactions(searchItem);
  }, [transActions])

  return (
    <div>
      
      <input className="valueInput" type="text" value={searchItem} onChange={changeHandler} placeholder="search your transactions" />
      {filteredTnx.map((item) => (
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
