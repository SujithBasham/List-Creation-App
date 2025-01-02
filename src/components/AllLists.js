import React from 'react';
import ListItem from './ListItem';

const AllLists = ({ lists }) => {
  const list1 = lists.filter(item => item.list_number === 1);
  const list2 = lists.filter(item => item.list_number === 2);

  return (
    <div className="all-lists-container">
      <div className="list-container">
        <h2>List 1</h2>
        {list1.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
      <div className="list-container">
        <h2>List 2</h2>
        {list2.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllLists;
