import React, {useEffect, useState} from 'react'

function Sathyacounter(props) {

  useEffect(() => {

        let intervalid = setInterval(function(){

        if(props.silent < 25){
        props.updatesilent(props.silent+1)
        }
        },150) 
        
        return () => clearInterval(intervalid);
        
    }, [props.silent]);

    useEffect(() => {

      let intervalid2 = setInterval(function(){

      if(props.count2 < 500000){
      props.updatesCount2(props.count2 + 1000)
      }
      },5) 
      
      return () => clearInterval(intervalid2);
      
  }, [props.count2]);

  useEffect(() => {

    let intervalid3 = setInterval(function(){

    if(props.count3 < 100000){
    props.updatesCount3(props.count3 + 500)
    }
    },35) 
    
    return () => clearInterval(intervalid3);
    
}, [props.count3]);

  return (
    <div className='grid grid-cols-3 gap-4 mt-5 text-center'>
      <div>
        <h1 className='text-2xl'>{props.silent} </h1>
        <h5 className='text-red-600 font-bold text-lg'> 25 Year of <br/> Excellance</h5>
      </div>
         
      <div>
      <h1 className='text-2xl'> {props.count2}+ </h1>
      <h5 className='text-red-600 font-bold text-lg'> Students</h5>
      </div>

      <div>
      <h1 className='text-2xl'> {props.count3} </h1>
      <h5 className='text-red-600 font-bold text-lg'> Students got Placed</h5>
      </div>
      
    </div>
  )
}

export default Sathyacounter
