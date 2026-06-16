import { useState } from "react";


export default function App() {
  // A state is a variable for a component - when it changes, the component function is called again
  // and the outout will be re-rendered
  // useState will return an array with two elements
  // index 0: the current value of the state
  // index 1: a setter function to change the value of the state
  // the parameter to useState is the default value of the state
  const [number, setNumber] = useState(5);
  const [triedToGoAbove10, setTriedToGoAbove10] = useState(false);

  // we CANNOT change the state variable via assignment
  // number = -100;

  const increment = () => {
    if (number == 10) {
      setTriedToGoAbove10(oldValue => true);
      return;
    }
    // setNumber(number + 1); 
    setNumber(oldStateValue => oldStateValue + 1)
  }

  return <>
    <h1>Current Counter Number</h1>
    <div style={{
      color: number % 2 == 0 ? "green" : "red"
    }}>{number}</div>
    <button onClick={increment}>+</button>
    <button onClick={() => {

      if (number == 0) {
        return;
      }
      setNumber(oldStateValue => oldStateValue - 1)


    }}>-</button>


    {
      triedToGoAbove10 && <div>Number cannot go above 10</div>
    }

    {
      number == 0 && <div>Number cannot go below 0</div>
    }

  </>
}