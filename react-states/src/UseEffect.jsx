import { useEffect, useState } from "react";

export default function UseEffect(){
    const [Joke, setJoke]=useState({})
    const URL ="https://icanhazdadjoke.com/"
    const getJoke = async()=>{
        let response =   await fetch(URL,{
            headers:{Accept: "application/json"}
        });
        let JsonResponse = await response.json();
      setJoke({joke: JsonResponse.joke , status: JsonResponse.status})
    };
    useEffect(()=>{
         const getFirstJoke = async()=>{
        let response =   await fetch(URL,{
            headers:{Accept: "application/json"}
        });
        let JsonResponse = await response.json();
      setJoke({joke: JsonResponse.joke , status: JsonResponse.status})
     
    };
     getFirstJoke();
    },[])
    return(
        <div>
           <h1 style={{color:"white"}}>New Joke</h1>
           <p style={{color:"white"}}>JOKE= {Joke.joke}</p>
           <p style={{color:"white"}}>STATUS= {Joke.status}</p>

           <button style={{color:"white"}} onClick={getJoke}>Get Joke</button>
        </div>
    );
}