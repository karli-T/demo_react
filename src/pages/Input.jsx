import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import InputExample from "../components/InputExample";

class Input extends React.Component {

    render() {
        return(
            <div>
                <Nav />
                <h1>Input</h1>
                <InputExample />
            </div>
        )
    }
}

export default Input;