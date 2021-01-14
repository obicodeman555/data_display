import React from "react";
import Card from "../card/Card";
import "./CardList.css";

const CardList = ({ users, loading }) => {
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
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
