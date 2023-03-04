import React from "react";
import "../stylesheets/input.css";

class InputExample extends React.Component{
    
    constructor(){
        super();
        this.state = {
            name: "",
            input: "",
            prev: ""
        };
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    showName = () => {
        if (this.state.prev !== ""){
            this.savePrev()
        }else{
            this.setState({
                prev: " ",
            })
        }
        this.setState({
            input: this.state.name,
            name: "",
        })
    }

    savePrev = () => {
        this.setState({
            prev: this.state.input,
        })
    }
    
    render(){
        
        return(
            <div className="example_container">
                <p>Name: {this.state.input}</p>
                <p id="prev">Previous Name: {this.state.prev}</p>
                <input type="text" onChange={this.updateName} value={this.state.name}/>
                <button id="show_button" onClick={this.showName}>Show Name</button>
            </div>
        )
    }

}

export default InputExample;