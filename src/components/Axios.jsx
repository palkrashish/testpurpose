import axios from "axios";
import { useEffect, useState } from "react";
const Axios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [setData]);
  return (
    <div>
      <h1 className="font-bold"> Example of Axios</h1>
      {data.map((msg) => {
        const { id, title, body } = msg;
        return (
          <div>
            <ol>
              <li> {id} </li>
              <li> {body} </li>
              <li> {title} </li>
            </ol>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
