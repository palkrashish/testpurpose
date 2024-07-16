import { useState } from "react";

const TextChange = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hideBtn = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible && <h1>Ashish</h1>}
      <button onClick={() => hideBtn()}> {isVisible ? "Hide" : "Show"} </button>
    </div>
  );
};

export default TextChange;
