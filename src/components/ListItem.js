import React from "react";

const ListItem = ({ item }) => (
  <div className="list-item">
    <h3 className="item-name">{item.name}</h3>
    <p className="item-description">{item.description}</p>
  </div>
);

export default ListItem;
