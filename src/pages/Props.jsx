import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import PropsExample from "../components/PropsExample";

class Props extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <h1>Props</h1>
                <p>Props are a way to pass data from one component to another. 
                <br/>
                They are passed in the same way as HTML attributes. 
                <br/>
                Props are immutable, meaning they cannot be changed once they are passed to a component.
                </p>
                <br/>
                
                <PropsExample name="Pearl" animal="giraffe" echo={() => {console.log("ECHO!")}}/>
                {/* <PropsExample name="Gary" animal="tiger" echo={() => {console.log("Testing")}}/>
                <PropsExample name="Zeke" animal="sloth" echo={() => {console.log("123")}}/>         */}
            </div>
        )
    }
}

export default Props;