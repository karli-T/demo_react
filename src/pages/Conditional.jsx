import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import ConditionalExample from "../components/ConditionalExample";

class Conditional extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <h1>Conditionals</h1>
                {/* <ConditionalExample current_state={true}/> */}
                {/* <ConditionalExample current_state={false}/> */}
            </div>
        )
    }
}

export default Conditional;