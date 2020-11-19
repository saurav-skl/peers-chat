import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form">
      <input
        className="input "
        placeholder="type a message..."
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => {
          console.log(message);
          return event.key === "Enter" ? sendMessage(event) : null;
        }}
      />
      <button
        className="sendButton"
        onClick={(event) => {
          console.log(message);
          return sendMessage(event);
        }}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
