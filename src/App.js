
import './App.css';
import { useState } from "react";
import ButtonTest from './ButtonTest';
import Display from './Display';

function App() {
  const [counter,setCounter]=useState(0);
  const incrementCounter=()=>{
    setCounter(counter+1);
}
  return (
    // here we are creating new attribute and passing functionRef and state
    <div className="App">
     <ButtonTest handleOnClick={incrementCounter}/>
     <Display message={counter}/>
    </div>
  );
}

export default App;
