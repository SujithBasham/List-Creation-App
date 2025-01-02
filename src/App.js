import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import FailureView from "./components/FailureView";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get("https://apis.ccbp.in/list-creation/lists");
      setData(response.data.lists);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <FailureView retryFunction={fetchData} />;
  }

  const groupedLists = data.reduce((acc, item) => {
    if (!acc[item.list_number]) {
      acc[item.list_number] = [];
    }
    acc[item.list_number].push(item);
    return acc;
  }, {});

  return (
    <div className="app-container">
      <h1 className="app-heading">List Creation</h1>
      <button className="create-button">Create a new list</button>
      <div className="lists-container">
        {Object.keys(groupedLists).map((listNumber) => (
          <List
            key={listNumber}
            title={`List ${listNumber}`}
            items={groupedLists[listNumber]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
