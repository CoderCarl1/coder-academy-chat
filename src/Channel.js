import React from "react";
import Message from "./Message";
import NewMessageForm from "./NewMessageForm";

class Channel extends React.Component {
  renderMessages() {
    return this.props.messages.map(message => (
      <Message key={message.id} {...message} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Main Channel</h2>
        <div className="channel">
          <div className="messages">
            <div>{this.renderMessages()}</div>
          </div>
          <NewMessageForm addMessage={this.props.addMessage} />
        </div>
      </div>
    );
  }
}

export default Channel;
