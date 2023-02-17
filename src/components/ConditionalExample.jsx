import React from "react";
import "../App.css";

class ConditionalExample extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            current_state: true,
        }
    }

    render(){
        
        return(
            <div>
                {this.props.current_state && <h3>I'm True</h3>}
                {!this.props.current_state && <h3>I'm False</h3>}
            </div>
        )
    }
}

export default ConditionalExample;