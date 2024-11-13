import React, { useState,useEffect } from 'react';
import './App.css';
import './styles/base.css';
import './styles/colors.css';
import './styles/utilities.css';
import './styles/home.css';
import axios from 'axios';


const App = () => {
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
        <nav className="flex row center nav-bar nav-margin">
          <div className="flex nav-title">Expense Tracker</div>

          <div className="flex budget-section">
            <div className="budget-txt">Total Budget:</div>
            <div className="budget-total" id="budget-total"></div>
          </div>
        </nav>

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

        <div className="flex row filter-container primary-bg">
          <div className="flex center filter-title green-txt">Filter</div>

          <div className="flex row filter-section">
            <input
              type="number"
              id="min-price-filter"
              placeholder="filter by min price"
            />
            <input
              type="number"
              id="max-price-filter"
              placeholder="filter by max price"
            />
            <select id="type-filter">
              <option value="">all types</option>
              <option value="income">income</option>
              <option value="expense">expense</option>
            </select>
            <input type="date" id="date-filter" />
            <input type="text" id="notes-filter" placeholder="filter by notes" />
            <button id="filter" className="white-txt green-bg filled-btn">
              filter
            </button>
          </div>
        </div>

        <section className="flex column transaction-info primary-bg" id="transaction-info">
          <div className="flex row Titles green-txt">
            <div className="price-title green-txt">Price</div>
            <div className="type-title green-txt">Type</div>
            <div className="date-title green-txt">Date</div>
            <div className="notes-title green-txt">Notes</div>
            <div className="actions-title green-txt">Actions</div>
          </div>

          <div className="flex column data-info black-txt" id="data-info">
          </div>
        </section>
      </div>
    );
}

export default App;
