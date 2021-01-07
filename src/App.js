import "./App.css";
import { increment, decrement, isLogged } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(isLogged());
        }}
      >
        Log in
      </button>
      {logged ? <h1>Logged in</h1> : <h1>Logged out</h1>}
    </div>
  );
}

export default App;
