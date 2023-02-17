import React from "react";
import "../App.css";
import IterationExample from "../components/IterationExample";

class Iteration extends React.Component {
    render() {
        return(
            <div>
                <h1>Iteration</h1>
                <p>Here is an example of iteration:</p>
                <IterationExample />
            </div>
        )
    }
}

export default Iteration;