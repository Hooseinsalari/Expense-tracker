import React, { useEffect, useState } from "react";

const TransActionForm = ({addTransAction}) => {
  const [formValues, setFormValues] = useState({
    type: "Expense",
    desc: "",
    amount: '',
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
        className="valueInput"
          type="text"
          name="desc"
          value={formValues.desc}
          onChange={changeHandler}
          placeholder="Description"
          required
        />
        <input
          className="valueInput"
          type="number"
          name="amount"
          value={formValues.amount}
          onChange={changeHandler}
          placeholder="Amount"
          required
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
        <button className="btn subBtn" type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default TransActionForm;
