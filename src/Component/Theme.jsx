import React from 'react'
import FetchData from './FetchData'

function Theme(props) {

  return (
    <div>
     <FetchData ctheme={props.ctheme} updateTheme={props.updateTheme}/>
    </div>
  )
}

export default Theme
