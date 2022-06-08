import React, { useState } from "react";

// // react state less functional component: Component nhung khong su dung state

// function Toggle(){
//     return <div className="toggle"></div>
// }
// // state full functional component: component co su dung state

// function Toggle(){

//     // su dung state trong nay
//     return <div className="toggle"></div>
// }

function Toggle(){
    const [on, setOn] = useState(false);
    const [number, setNumber] = useState(0);

    console.log(on);
    console.log(number);
    // 1. enable state: useState( Initialize value 
    // 2, initialize state : use State (false)
    // 3. read state 
    // 4. update state
    // const [on] = React.useState(false);
    // console.log(on);
    return (
        <div>
            <button onClick={() => setOn(!on)}>Test</button>
            <p>{on ? 'True' : 'False'}</p>
            <button onClick={() => setNumber(number + 1)}>Test</button>
            <p>{number}</p>
        </div>
    )
}

export default Toggle;                 