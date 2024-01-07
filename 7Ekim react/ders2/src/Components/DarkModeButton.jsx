import React from 'react'


const DarkModeButton = (props) => {

    const { div } = props

    const changeTheme = () => {

            div.current.classList.toggle('active')

            //alternatif
            // document.getElementById('root').classList.toggle('active')

    }


  return (

    <>
    

        <button onClick={changeTheme}>Modu değiştir</button>

    </>

  )
}

export default DarkModeButton