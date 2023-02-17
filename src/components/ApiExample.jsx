import React from "react";
import "../App.css";

class ApiExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        posts: [],
        token: "",
        userID: "",
    };
  }

  // API call to sign up a user
  register = () => {
    fetch("https://webdev.cse.buffalo.edu/hci/api/api/example/auth/signup", {
        method: "POST",
        headers: {
            'Accept': "*/*",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            attributes: {
                username: "User",
            }
        })
    })
    .then(response => response.json())
    .then(result => {

        // save token and userID in state
        this.setState({
            token: result.token,
            userID: result.userID,
        });

        console.log("user signed up");
        console.log(result);

        // save userID and token in session
        sessionStorage.setItem("user",result.userID);   // save userID in session
        sessionStorage.setItem("token",result.token);   // save token in session
    },
    error => {
        console.log("error creating user");
    }
    );
}

    // API call to get all posts
    getPosts = () => {
        fetch("https://webdev.cse.buffalo.edu/hci/api/api/example/posts?sort=newest", {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + this.state.token,
            },
        })
        .then(response => response.json())
        .then(result => {
            // save posts from result in state
            // posts are in result[0] because the API returns a nested array
            // posts are in the first index (0) of the array.
            this.setState({
                posts: (result[0]),
            });
            console.log("posts retrieved");
            console.log(result);
        },
        error => {
            console.log("error retrieving posts");
        }
        );
    }

    getEmail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    getPassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

  render() {
    
    return (
      <div>
        <div className="container">
            <p>Enter Email:</p>
            <input type="text" onChange={this.getEmail} value={this.state.email}/>
            <p>Enter Password:</p>
            <input type="text" onChange={this.getPassword} value={this.state.password}/>
            <br/>
            <button onClick={this.register}>Sign Up!</button>
            <br/>
            {this.state.token !== "" && <p>Thanks for Signing Up!</p>}
            <br/>
            {this.state.token !== "" && <button onClick={this.getPosts}>Show Posts!</button>}

            {this.state.posts.map((post) => (
                <div>
                    <p key={post.id}>{post.content}</p>
                </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ApiExample;