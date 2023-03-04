import React from "react";
import "../stylesheets/input.css";
import InputExample from "../components/InputExample";

class Input extends React.Component {

    render() {
        return(
            <div className="input_container">
                <h1 id="input_heading">Input</h1>
                <InputExample />
            </div>
        )
    }
}

export default Input;