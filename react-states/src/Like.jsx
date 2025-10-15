import { useState } from "react";

export default function Like(){
    const [isLiked, setisLIked]=useState(false);
    const [clicks,setClicks]=useState(0);
    let liked =()=>{
        setisLIked(!isLiked);
        setClicks(clicks=>clicks+1)
    }
    return(
        <div style={{textAlign:"center", marginTop:"10rem", }}>
            <h1 style={{color:"white"}}>Counter</h1>
            <p style={{fontSize:"20px",color:"white"}}>{clicks}</p>
            <h1 onClick={liked}>
                {
                    isLiked ? <i style={{color:"red",fontSize:"40px"}} className="fa-solid fa-heart"></i> :<i style={{fontSize:"40px"}}className="fa-regular fa-heart"></i>
                }
            </h1>
            
        </div>
    );
}