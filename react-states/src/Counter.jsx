import { useState } from "react";
export default function Counter(){
    const [count, setCount]= useState(0);
    function Count(){
        setCount(count => count + 1);

    }
    return(
        <div>
            <p>{count}</p>
            <button style={{color:"white"}} onClick={Count}>Counter</button>
        </div>
    );
}