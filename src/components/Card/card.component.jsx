import React from "react";
import "./card.style.css";

const Card = props => {
  return (
    <div className="card-container">
      <h1>{props.monster.name}</h1>
    </div>
  );
};

export default Card;
