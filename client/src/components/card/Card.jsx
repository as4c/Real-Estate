

import { Link } from "react-router-dom";
import "./card.scss";
import Chat from "../chat/Chat";
import { useState } from "react";



function Card({ item }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage chat box visibility

  // Function to handle opening the chat box
  const handleOpenChat = () => {
    setIsOpen(!isOpen);
  }; 
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>

            {/* On this div write methods to open up chat box */}
            <div className="icon" onClick={handleOpenChat}>   
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* {isOpen && <Chat />} */}
    </div>
  );
}

export default Card;
