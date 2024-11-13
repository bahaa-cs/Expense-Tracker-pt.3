import React, { useState } from 'react';
import './App.css';
import './styles/base.css';
import './styles/colors.css';
import './styles/utilities.css';
import './styles/home.css';

function App() {
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
          <input type="text" id="price" placeholder="0" required />
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required>
            <option value="income" selected>
              income
            </option>
            <option value="expense">expense</option>
          </select>
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" required />
          <label htmlFor="notes">Notes: </label>
          <input type="text" id="notes" placeholder="notes" required />
          <button type="submit" className="flex center create-transaction filled-btn green-bg white-txt">
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
