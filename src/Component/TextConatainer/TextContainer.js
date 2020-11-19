import React from 'react';

// import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

// console.log(room);
const TextContainer = ({ users,room }) => 
(
  <div className="textContainer">
    <div>
      {/* <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span>Room : {room}</h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
      {console.log(room)} */}
    </div>
    {
      
      users
        ? (
          <div>
            <h1>People currently chatting in room {room}:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    {/* <img alt="Online Icon" src={onlineIcon}/> */}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
