import React,{useEffect,useState} from "react"
import axios from 'axios';
import Details from "./Details"
const NavBar = () => {
    const [budget,setBudget] = useState([])

    useEffect(()=>{
      const getBudget = async () => {
        const response = await axios.get("http://localhost:8080/expense-tracker-pt3/backend/getTotalBudget.php");
        const result = response.data
        console.log(result)
        setBudget(result.budget ? result.budget: 0);

    };

    getBudget();

    },[]);

    return ( <div>
            <nav className="flex row center nav-bar nav-margin">
          <div className="flex nav-title">Expense Tracker</div>

          <div className="flex budget-section">
            <div className="budget-txt">Total Budget: $ {budget}</div>
            <div className="budget-total" id="budget-total"></div>
          </div>
        </nav>
    </div> )
    
}

export default NavBar;