import React from 'react'
import { useState } from 'react'
import "./WeatherApp.css"
export default function WeatherApp() {
    let [city,setCity]=useState("")
    let [wDetail,setwDetail]=useState()
    let [load,setLoad]=useState(false)
    let [theme,setTheme]=useState("day")
    let getCity =(event)=>{
        setLoad(true)
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=607edf96f6ff9208e9e6e8162c7c6d75`
)
       .then((res)=>res.json())
       .then((finalres)=>{
        if(finalres.cod==="404"){

            setwDetail(undefined)
        }
        else{
            console.log(finalres)
            setwDetail(finalres)
          
        }
        setLoad(false)
       })
       
        event.preventDefault()
        setCity("")
    }
  return (
    <>
     <div className="sun"></div>
    <div className="cloud"></div>
     <div className="cloud2"></div>
      <div className="cloud3"></div>
      <div className='star'></div>
      <form onSubmit={getCity}>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Submit</button>
      </form>

      {wDetail!==undefined ? (
        <div className='data'>
            <div className={`${load?"loader":"hide"}`}></div>
          <h3>{wDetail.name} {wDetail.sys.country}</h3>
          <p>Temperature: {wDetail.main.temp}°C</p>
          <p>Humidity: {wDetail.main.humidity}%</p>
           <p>Feels-Like: {wDetail.main.feels_like}%</p>
           <img src={`http://openweathermap.org/img/w/${wDetail.weather[0].icon}.png`} alt="" />
             <p>{wDetail.weather[0].description}</p>
        </div>
      ) : (
        "No Data"
      )}
    </>
  )
}