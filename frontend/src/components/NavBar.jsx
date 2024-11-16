import React,{useEffect,useState} from "react"


const NavBar = () => {
    const [budget,setBudget] = useState(0)

    useEffect(()=>{
      

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