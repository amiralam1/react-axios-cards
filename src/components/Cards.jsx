import React from "react";
import './Card.css'

const Card = ({title,desc}) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <h1>{ title }</h1>
        <p>{ desc }</p>
      </div>
    </div>
  );
};

export default Card;
