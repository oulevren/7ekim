import React, { useEffect, useRef, useState } from 'react'



const Sayac = () => {

    const [counter, setCounter] = useState(0)

    const birAzaltanButton = useRef()

    useEffect(() => {
            // console.log("bir defa çalışıyorum")

            birAzaltanButton.current.disabled = true

    },[])



    const birArttir = () => {

        if(birAzaltanButton.current.disabled === true){
            birAzaltanButton.current.disabled = false
        }

            setCounter(counter +1)

    }

    const birAzalt = () =>{

        if(counter <= 1){
            birAzaltanButton.current.disabled = true
        }
        // return;
        

            setCounter(counter -1)

    }

    const resetle = () => {
        birAzaltanButton.current.disabled = true
        setCounter(0)
    }

  return (
    <>
        <p>Aşağıdaki sayacı güncelle</p>
        <p>Sayac:
            <span>{counter}</span>
        </p>


    <button onClick={birArttir}>1 Arttır</button>
    <button ref={birAzaltanButton} onClick={birAzalt}>1 Azalt</button>
    <button onClick={resetle}>Resetle</button>
    
    
    
    
    </>
  )
}

export default Sayac