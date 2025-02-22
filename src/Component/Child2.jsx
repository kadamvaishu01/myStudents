import React from 'react'
import Child3 from './Child3'

function Child2(props) {
  return (
    <>
    <div >
       <form className='bg-rose-400 mt-36 w-96 h-64 '> 
      <label>Enter your name:
        <input
          type="text" className='border-2 border-s-black'
          value=""/>
      </label><br/><br/>

      <label>Enter your Email:
        <input
          type="text" 
          value=""/>
      </label><br/><br/>

      <label>Enter your Age:
        <input
          type="text" 
          value=""/>
      </label><br/><br/>

      <label>Enter your Mobile no.:
        <input
          type="text" 
          value=""/>
      </label><br/><br/>

      <input type="button" value="Save"/>

    </form>
    </div>


   <Child3 ctheme={props.ctheme} updateTheme={props.updateTheme}/>
    </>
  )
  
}

export default Child2
