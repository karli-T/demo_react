import React from "react";
import "../App.css";
import Nav from "../components/Nav";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                
                <br />
                <h1>Home</h1>
                <p>This is the home page.</p>
                <p>Welcome to the first React Tutorial!</p>
            </div>
        )
    }
}

export default Home;