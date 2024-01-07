import React from 'react'

export default function Gezegenler(props) {


    //object destruacting
    const { adi,info } = props

  return (
    <>


    
    <li title={info}>{adi}</li>


    </>
  )
}

