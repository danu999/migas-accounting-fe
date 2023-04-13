import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/`
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          <p>ID: {post.id}</p>
          <p>TITLE: {post.title}</p>
          <p>BODY: {post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
