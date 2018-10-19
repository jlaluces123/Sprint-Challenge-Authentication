import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        <h2>Lets have a good laugh</h2>
        <ul>
          {this.state.jokes.map(jokes => (
            <h2>work</h2>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const endpoint = 'http://localhost:3300/api/jokes';
    const options = {
      headers: { // we passed the token as a header in our server so lets do it here
        Authorization: token
      }
    };
    axios
      .get(endpoint, options)
      .then(res => {
        console.log(res.data, 'RES.DATA FROM JOKES.JS');
        this.setState({ jokes: res.data.jokes });
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  }
}

export default Jokes;