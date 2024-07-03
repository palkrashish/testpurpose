import "./App.css";
import Api from "./components/Api";
import Axios from "./components/Axios";
const App = () => {
  return (
    <div className="container">
      <h1 className="font-bold text-[30px] p-2 m-2 border border-slate-800 bg-gray-500 w-15 h-16 rounded-lg text-center ">
        Welcome to Machine round Questions
      </h1>
      {/* Example of API fetching  */}
      {/* <Api /> */}
      <Axios />
    </div>
  );
};

export default App;
