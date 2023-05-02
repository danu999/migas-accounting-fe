import { useState, useEffect } from "react";
import axios from "axios";

function testCounter() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (count < 1) {
        throw new Error("ERROR");
      }
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${count}`
      );
      setData(response.data);
      setShowError(false);
    } catch (error) {
      console.log(error);
      setData([]);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  const plus = () => {
    if (count < 500) {
      setCount(count + 1);
    }
  };

  const min = () => {
    if (count === 1) {
      setShowError(true);
    } else if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button style={{ fontSize: "5rem" }} onClick={min}>
          -
        </button>
        <span style={{ fontSize: "5rem" }}>{count}</span>
        <button style={{ fontSize: "5rem" }} onClick={plus}>
          +
        </button>
      </div>
      <h1>SHOW DATA :</h1>
      {showError && <p style={{ color: "red", fontSize: "5rem" }}>ERROR</p>}
      {isLoading && (
        <p style={{ color: "blue", fontSize: "5rem" }}>Loading...</p>
      )}
      {!showError && !isLoading && (
        <>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Body: {data.body}</p>
        </>
      )}
    </div>
  );
}

export default testCounter;
