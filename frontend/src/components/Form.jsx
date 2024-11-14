import axios from 'axios';
import React, { useState,useEffect } from 'react';

const Form = () => {
    const [transactionForm, setTransactionForm] = useState({
      price: "",
      type: "",
      date: "",
      notes:""
    });
    

    axios.get("http://localhost:8080/expense-tracker-pt3/backend/getTransactions.php")
    .then((res)=>{
     

    })

    return (
      <div>

        <div className="flex form-section primary-bg">
          <form className="flex column" id="transactionForm">
            <label htmlFor="id">Transaction ID (for edit action)</label>
            <input type="text" id="id" disabled />
            <label htmlFor="price">Price: </label>
            <input 
            type="text"
            id="price"
            placeholder="0"
            required
            onChange={(e) => {
              setTransactionForm({
                ...transactionForm,
                price: e.target.value,
              });
            }}
            />
            <label htmlFor="type">Type: </label>
            <select 
            id="type" 
            name="type" 
            required
            onChange={(e) => {
              setTransactionForm({
                ...transactionForm,
                type: e.target.value,
              });
            }}
            >
              <option value="income">
                income
              </option>
              <option value="expense">expense</option>
            </select>
            <label htmlFor="date">Date: </label>
            <input 
            type="date" 
            id="date" 
            required 
            onChange={(e) => {
              setTransactionForm({
                ...transactionForm,
                date: e.target.value,
              });
            }}
            />
            <label htmlFor="notes">Notes: </label>
            <input 
            type="text" 
            id="notes" 
            placeholder="notes" 
            required 
            onChange={(e) => {
              setTransactionForm({
                ...transactionForm,
                notes: e.target.value,
              });
            }}
            />
            <button type="submit" className="flex center create-transaction filled-btn green-bg white-txt"
              onClick={() => {

                const data = new FormData();

                data.append("price", transactionForm.price);
                data.append("type", transactionForm.type);
                data.append("date", transactionForm.date);
                data.append("notes", transactionForm.notes);

                axios
                  .post("http://localhost:8080/expense-tracker-pt3/backend/insertTransaction.php", data)
                  .then(() => {
                    console.log("Successfully Inserted")
                  })
                  .catch((error) => {
                    console.log(error.response.data.status);
                  });
              }}
            >
              Save Transaction
            </button>
          </form>
        </div>
      </div>
    );
}

export default Form;