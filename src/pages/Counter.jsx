import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import CounterExample from "../components/CounterExample";

class Counter extends React.Component {
    render() {
        return (
            <div className="Counter">
                <Nav />
                <h1>Counter</h1>
                <CounterExample />
            </div>
        );
    }
}

export default Counter;
