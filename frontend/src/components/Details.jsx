import axios from 'axios';
import React, { useState,useEffect } from 'react';

const Details = async () =>{

    const response = await axios.get("http://localhost:8080/expense-tracker-pt3/backend/getTransactions.php")
    const transactions = response.data

    const listTransactions = transactions.map(transaction=>
      <>
        <div className="flex row Titles green-txt">
        <div className="price-title green-txt">{transaction.Price}</div>
          <div className="type-title green-txt">{transaction.Type}</div>
          <div className="date-title green-txt">{transaction.Date}</div>
          <div className="notes-title green-txt">{transaction.Notes}</div>
          <div className="actions-title green-txt">Actions</div>
        </div>

        <div className="flex column data-info black-txt" id="data-info">
      </div>
      </>
    );

    return (
          <>
          <section className="flex column transaction-info primary-bg" id="transaction-info">

            {listTransactions}
          </section>
          </>
    )
}

export default Details;