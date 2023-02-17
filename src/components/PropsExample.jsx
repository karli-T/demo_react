import React from "react";
import "../App.css";

class PropsExample extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            animal: this.props.animal,
            echo: this.props.echo
        }
    }

    render(){
        
        return(
            <div>
                <p>Hi! My name is {this.props.name}</p>
                <p>My favorite animal is a {this.props.animal}</p>

                <button onClick={() => this.props.echo()}>Echo</button>
            </div>
        )
    }

}

export default PropsExample;