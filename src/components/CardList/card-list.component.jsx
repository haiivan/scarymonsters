import React from "react";
import "./card-list.style.css";
import Card from "../Card/card.component";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;