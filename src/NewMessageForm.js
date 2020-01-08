import React from "react";
import axios from "axios";

class NewMessageForm extends React.Component {
  state = {
    user: null,
    text: null
  };

  updateUser = e => {
    this.setState({ user: e.target.value });
  };

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  sendOnEnter = e => {
    if (e.keyCode === 13) {
      e.target.value = "";
      this.send();
    }
  };

  send = () => {
    axios
      .post("http://localhost:3001/messages", {
        text: this.state.text,
        user: this.state.user
      })
      .then(response => {
        this.props.addMessage(response.data);
      });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Your name" onChange={this.updateUser} />
        <input
          type="text"
          placeholder="Message Main channel"
          onKeyDown={this.sendOnEnter}
          onChange={this.updateText}
        />
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default NewMessageForm;
