import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>{" "}
      <h1> {counter} </h1>{" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        {" "}
        +{" "}
      </button>{" "}
    </div>
  );
}

export default App;
