import React from "react";
import ListItem from "./ListItem";

const List = ({ title, items }) => (
  <div className="list-container">
    <h2 className="list-title">{title}</h2>
    <div className="list-items">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default List;
