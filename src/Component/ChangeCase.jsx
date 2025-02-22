import React, { useState } from 'react'

function ChangeCase() {

    const [content, setContent] = useState('');

    const [textLength, settextLength] = useState(0);

    const [wordcount, setwordCount] = useState(0);

    function changetext(val){
      if(val.target.value.length <= 100) {
    setContent(val.target.value);
    settextLength(val.target.value.length);
      }
      let wcount =val.target.value.split(' ');
 
      setwordCount(wcount.length);

    }

    function changeupper(){
       setContent(content.toUpperCase());
    }

    function changelower(){
        setContent(content.toLowerCase());
    }

    function changelength(){
        setContent(content.length);
    }
  return (
    <div className='grid grid-cols-1 justify-center text-center items-center w-full  bg-pink-300 mt-5 h-[500px]'>

        <div className='m-auto'> 
            
            <textarea rows={8} cols={50} className='font-bold text-lg' onChange={changetext} value={content}></textarea><br/>

             <div className='bg-black h-16 text-white text-lg font-bold'>
             Text Length :- {textLength}/100<br/> Word Count :-  {wordcount}
             </div>
            <button className='mt-5 bg-black rounded-lg h-10 w-[60%] text-white text-lg font-bold' onClick={changeupper}>Convert To Uppercase</button><br />

            <button className='mt-5 bg-black rounded-lg h-10 w-[60%] text-white text-lg font-bold' onClick={changelower} >Convert To Lowercase</button><br />


            <button className='mt-5 bg-black rounded-lg h-10 w-[60%] text-white text-lg font-bold' onClick={changelength}  >Text Length</button><br />


        </div>

            </div>
  )
}

export default ChangeCase
