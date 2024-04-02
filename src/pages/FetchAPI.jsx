import { useState, useEffect } from "react";

const FetchAPI = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, []);
  return <div>{data.title}</div>;
}

export default FetchAPI