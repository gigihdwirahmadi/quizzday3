
import React from 'react'
import './box.css'
function Box(props) {
  return (
 <div class="Box" key={props.value}>{props.name} <br></br> {props.email}<br></br>{props.address}<br></br>{props.number}</div>
    )
}

export default Box