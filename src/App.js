import React from "react";
import axios from "axios";

import "./App.scss";

import Channel from "./Channel";

class App extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/messages")
      .then(response => this.setState({ messages: response.data }));
  }

  addMessage = message => {
    this.setState({ messages: this.state.messages.concat(message) });
  };

  render() {
    return (
      <div className="App">
        <Channel messages={this.state.messages} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
