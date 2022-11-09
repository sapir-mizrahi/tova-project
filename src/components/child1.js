import React from 'react';
import "./style.css";

function Child1(props) {
  // const {count}=props;
  return (
    <div className='class-div'>
      
     {props.count}
     <button onClick={()=>props.reset()}>reset</button>
    </div>
  );
}


export default Child1;
