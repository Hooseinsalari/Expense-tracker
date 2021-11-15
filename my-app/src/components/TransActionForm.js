import React, { useState } from "react";

const TransActionForm = ({addTransAction}) => {
  const [formValues, setFormValues] = useState({
    type: "Expense",
    desc: "",
    amount: 0,
  });

  const changeHandler = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
      event.preventDefault()
      addTransAction(formValues);
  }

  return (
    <div>
      <form className="formContainer" onSubmit={submitHandler}>
        <input
          type="text"
          name="desc"
          value={formValues.desc}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="amount"
          value={formValues.amount}
          onChange={changeHandler}
        />
        <div>
          <input
            type="radio"
            value="Expense"
            name="type"
            checked={formValues.type === "Expense"}
            onChange={changeHandler}
          />
          <label>Expense</label>
          <input
            type="radio"
            value="Income"
            name="type"
            checked={formValues.type === "Income"}
            onChange={changeHandler}
          />
          <label>Income</label>
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default TransActionForm;
