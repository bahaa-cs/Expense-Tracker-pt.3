import React from "react"

const Filter = () => {
return (
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
)
}
export default Filter;
