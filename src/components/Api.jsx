import { useEffect, useState } from "react";

const Api = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    apiData();
  }, []);
  const apiData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    console.log(response);
    setPost(response);
  };
  return (
    <div>
      <h1>Example of API</h1>
      {post.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id} >
            <h2>{body}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
