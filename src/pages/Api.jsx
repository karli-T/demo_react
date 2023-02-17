import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import ApiExample from "../components/ApiExample";

class Api extends React.Component{
    render(){
        return (
            <div className="container">
                <Nav />
                <h1>Example API</h1>
                <ApiExample />
            </div>
        );
    }
}

export default Api;