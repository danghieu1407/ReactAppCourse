import React, { useState } from "react";
import "./ToggleStyle.css";

// // react state less functional component: Component nhung khong su dung state

// function Toggle(){
//     return <div className="toggle"></div>
// }
// // state full functional component: component co su dung state

// function Toggle(){

//     // su dung state trong nay
//     return <div className="toggle"></div>
// }

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  // 1. enable state: useState( Initialize value
  // 2, initialize state : use State (false)
  // 3. read state
  // 4. update state
  // const [on] = React.useState(false);
  // console.log(on);
  return (
    <div>
        <div className={`toggle ${on ?  "active" : "" }`}>
            <div className={`spinner ${on? "active" : ""}`}></div>
        </div>
        {on ? 'on' : 'off'}
        <div className="toggle-control">
            <div className="toggle-on" onClick={() => setOn(true)}>on</div>
            <div className="toggle-off" onClick={()=> setOn(false)}>off</div>
        </div>

    </div>
  );
}

export default Toggle;
