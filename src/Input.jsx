import React from "react";
import "./box.css";
function Box(props) {
  return (
   
      <div class="input">
        <input
          type="text"
          class="text"
          ref={props.refa}
          onChange={props.fungsi1}
        />
        <textarea onChange={props.fungsi2} ref={props.refb}></textarea>
        <input type="submit" onClick={props.fungsi3} />
        <div class="result">{props.result}</div>
      </div>
 
  );
}

export default Box;
