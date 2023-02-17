import React from "react";
import "../App.css";
import CounterExample from "../components/CounterExample";

class Counter extends React.Component {
    render() {
        return (
            <div className="Counter">
                <h1>Counter</h1>
                <CounterExample />
            </div>
        );
    }
}

export default Counter;
