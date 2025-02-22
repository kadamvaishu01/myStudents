import React, { useState } from 'react'
import Content from './Content';

function Counter() {

  const [Counter , setCounter] = useState(0);

  const [Counter2 , setCounter2] = useState(45000);

  const [Counter3 , setCounter3] = useState(50000);
  return (
    <>
    <Content Counter={Counter} updateFunction={setCounter} Counter2={Counter2} updateFunction2={setCounter2} Counter3={Counter3} updateFunction3={setCounter3}/>
    </>
  )
  
}

export default Counter
