import { useState } from "react";

import "./Picture.css";
import Pictureset from './Pictureset';

export default function Picture() {
  let [state, setSate] = useState(false)
  function handleClick() {
    setSate(!state)
  }

  return (
    <div className='main'>

      <div className='Picture'>
        <img className='img1' src="/images/eyepic.png" alt="picture not found" />
        <button style={{ color: "white" }} type="button" onClick={handleClick}>Click me</button>
        <div>
          <h2 id="h2">{state ? "Shiver me Timber" : " Black Facts"}</h2>
          <hr />

        </div>
      </div>
    </div>
  );
}
