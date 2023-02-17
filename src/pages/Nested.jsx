import React from "react";
import "../App.css";
import NestedExample from "../components/NestedExample";
// import ConditionalExample from "../components/ConditionalExample";

class Nested extends React.Component {
    render() {
        return(
            <div>
                <h1>Nested Components</h1>
                <p>Nested components are components that are nested inside of other components. 
                <br/>
                <br/>
                They are used to break up a large component into smaller components. 
                <br/>
                <br/>
                This makes it easier to read and understand the code. 
                <br/>
                <br/>
                It also makes it easier to debug and fix bugs.</p>
                <br/>
                <p>Here is an example of a nested component:</p>

                <NestedExample />
                {/* <ConditionalExample current_state={true}/> */}
            </div>
        )
    }
}

export default Nested;