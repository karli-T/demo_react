import React from "react";
import "../App.css";
import {
   Link
} from 'react-router-dom';


class Nav extends React.Component {
   render() {
      return (
         <div id="nav" className="top_navbar">
            <ul id="nav_items">
                <li className="tab"><Link to="/">Home</Link></li>
                <li className="tab"><Link to="/nested">Nested Example</Link></li>
                <li className="tab"><Link to="/counter">Counter Examples</Link></li>
                <li className="tab"><Link to="/iteration">Iteration Example</Link></li>
                <li className="tab"><Link to="/conditional">Conditional Example</Link></li>
                <li className="tab"><Link to="/input">Input Example</Link></li>
                <li className="tab"><Link to="/props">Props Example</Link></li>
                <li className="tab"><Link to="/api">API</Link></li>
               <li className="tab"><Link to="/datatables">Data Tables</Link></li>
               <li className="tab"><Link to="/reactdatatables">React Data Tables</Link></li>
            </ul>
         </div>
      )
   }
}

export default Nav;