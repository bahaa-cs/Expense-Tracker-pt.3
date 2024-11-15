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
    <div key={transaction.id}>
      <div className="flex row Titles green-txt">
        <div className="price-title green-txt">Price</div>
        <div className="type-title green-txt">Type</div>
        <div className="date-title green-txt">Date</div>
        <div className="notes-title green-txt">Notes</div>
        <div className="actions-title green-txt">Actions</div>
      </div>

      <div className="flex column data-info black-txt" id="data-info">
        <div className="price-title green-txt">{transaction.price}</div>
        <div className="type-title green-txt">{transaction.type}</div>
        <div className="date-title green-txt">{transaction.date}</div>
        <div className="notes-title green-txt">{transaction.notes}</div>    
      </div>
    </div>
  ));

  return (
    <section className="flex column transaction-info primary-bg" id="transaction-info">
      {listTransactions}
    </section>
  );
};

export default Details;
