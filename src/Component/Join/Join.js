import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="name"
            type="text"
            className="joinInput"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="room"
            type="text"
            className="joinInput mt-20"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20">Sign In</button>
        </Link>
      </div>
      {/* <h1>{name}</h1> */}
      {/* <h1>{room}</h1> */}
    </div>
  );
};

export default Join;
