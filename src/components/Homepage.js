import React, { useState, useEffect, useRef } from 'react';
import Child1 from './child1';
import Child2 from './child2';

function Homepage() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const name = useRef('');
  const lastName=useRef('')
  const [email,setEmail]=useState('')

  useEffect(() => {

    
  }, []);

  const addNum = () => {
    setCounter(counter + 1);
  }

  const addNum2 = () => {
    setCounter2(counter2 + 1);
  }
  const reset = () => {
    setCounter(0);
  }
  function GetName(e){
    debugger
    setEmail(e)
    console.log("email",email);
  }
  return (
    <>
      <div>
      enter first name: <input type="text" ref={name} />

        enter last name: <input type="text" ref={lastName} /><br/>
        <input type="text" onChange={(e)=>GetName(e.target.value)}></input>
        <button onClick={GetName}>submit</button>
        <Child1 count={counter} reset={reset}></Child1>
        <button onClick={() => addNum2()}>click me</button>
        <Child2 count={counter2} ></Child2>
      </div>

    </>

  );
}

export default Homepage;
