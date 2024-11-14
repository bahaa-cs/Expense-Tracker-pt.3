import React from "react"

const Details = () =>{
    return (
                      
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

    )
}

export default Details;