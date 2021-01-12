import React from "react";
import Card from "../card/Card";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="cardListContainer">
      {props?.users?.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default CardList;
