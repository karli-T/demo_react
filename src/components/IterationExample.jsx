import React from "react";
import "../App.css";

class IterationExample extends React.Component{

    constructor(){
        super();
        this.state = {
            names: ["Chester", "Mike", "Joe", "Mark"],
        }
    }

    render(){
        
        return(
            <div>
                {this.state.names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </div>
        )
    }
}

export default IterationExample;