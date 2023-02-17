import React from "react";
import "../App.css";
import ApiExample from "../components/ApiExample";

class Api extends React.Component{
    render(){
        return (
            <div className="container">
                <h1>Example API</h1>
                <ApiExample />
            </div>
        );
    }
}

export default Api;