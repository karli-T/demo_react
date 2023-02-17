import React from "react";
import "../App.css";

class InputExample extends React.Component{
    
    constructor(){
        super();
        this.state = {
            name: "",
            input: "",
        };
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    showName = () => {
        this.setState({
            input: this.state.name,
            name: "",
        })
    }
    
    render(){
        
        return(
            <div>
                <p>Name: {this.state.input}</p>
                <input type="text" onChange={this.updateName} value={this.state.name}/>
                <button onClick={this.showName}>Show Name</button>
            </div>
        )
    }

}

export default InputExample;