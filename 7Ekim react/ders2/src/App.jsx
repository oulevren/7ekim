import { useRef } from 'react'
import './App.css'
import DarkModeButton from './Components/DarkModeButton'
import Personels from './Components/Personels'



function App() {
  

  const rootDiv = useRef()


  return (
    <>
      
      

      <div className="container" ref={rootDiv}>
        <DarkModeButton div={rootDiv}></DarkModeButton>

          <div className="site-container">
            <h1>Article</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
      </div>

      <Personels></Personels>

    </>
  )
}

export default App
