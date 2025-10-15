import { useState } from 'react'
import Pictureframe from "../../my-react-app/src/Pictureframe"
import Picture from "./Picture"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Picture />
      <Pictureframe />

    </>
  )
}

export default App
