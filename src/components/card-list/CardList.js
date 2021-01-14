import React from "react";
import Card from "../card/Card";
import "./CardList.css";

const CardList = ({ users, loading }) => {
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <div className="cardListContainer">
      {users?.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default CardList;
