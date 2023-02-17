import React from "react";
import "../App.css";

class CounterExample extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    increment = () => {
        this.setState({
        count: this.state.count + 1,
        });
    };
    
    decrement = () => {
        this.setState({
        count: this.state.count - 1,
        });
    };
    
    render() {
        return (
        <div className="Counter">
            <h2>Here is an example of a counter:</h2>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
        );
    }

}

export default CounterExample;
