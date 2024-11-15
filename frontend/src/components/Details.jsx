import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Details = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
        const response = await axios.get("http://localhost:8080/expense-tracker-pt3/backend/getTransactions.php");
        setTransactions(response.data); 
    };

    fetchTransactions();
  }, []);


  const listTransactions = transactions.map((transaction) => (


      <div className="flex row data black-txt" id="data-info">
        <div key={transaction.id}></div>
        <div className="price">{transaction.price}</div>
        <div className="type">{transaction.type}</div>
        <div className="date">{transaction.date}</div>
        <div className="notes">{transaction.notes}</div>    
        <div class="flex row action-btns black-txt">
                <button class="edit-btn action-btn black-txt">edit</button>
                <button class="delete-btn action-btn red-bg white-txt">delete</button>
            </div>
      </div>
    
  ));

  return (
    <section className="flex column transaction-info primary-bg" id="transaction-info">
    
      <div className="flex row Titles green-txt">
        <div className="price-title">Price</div>
        <div className="type-title">Type</div>
        <div className="date-title">Date</div>
        <div className="notes-title">Notes</div>
        <div className="actions-title">Actions</div>
      </div>
      

      {listTransactions}
    </section>
  );
};

export default Details;
