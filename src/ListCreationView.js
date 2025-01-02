import React from 'react';

const ListItem = ({ item }) => (
  <div className="list-item">
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
);

export default ListItem;
