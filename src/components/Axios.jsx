import axios from "axios";
import { useEffect } from "react";
const Axios = () => {
    useEffect(()=>{
        axios.get("")
        .then((res)=>{})
    })
  return (
    <div>
      <h1> example of Axios</h1>
    </div>
  );
};

export default Axios;
