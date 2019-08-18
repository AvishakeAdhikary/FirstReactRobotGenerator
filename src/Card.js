import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img alt={"robot"} src={`https://robohash.org/${props.id}`} />
      <h3>Name:{props.name}</h3>
      <h5>Email:{props.email}</h5>
    </div>
  );
};

export default Card;
