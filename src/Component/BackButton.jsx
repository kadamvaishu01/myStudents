import React from 'react'

function BackButton(props) {

    function back(){
        props.setChangeForm('hidden');
        props.setshowForm('hidden');
    }
  return (
    <div>
      <span className=' ms-[35%] text-3xl'><ion-icon name="arrow-back-circle-outline" onClick={back}></ion-icon></span>
    </div>
  )
}

export default BackButton
