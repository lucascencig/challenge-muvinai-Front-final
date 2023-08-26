import React, { useState } from 'react'

import classnames from 'classnames'


export const ButtonFitMedical = ({ user, estilos, onClick }) => {

  const variants = {
    blueForFitMedical: 'bg-sky-600 w-48 h-12 text-white font-bold p-2 rounded-md hover:bg-sky-700 ease-in duration-100'
  }

  const styleDiv = classnames('p-4 flex justify-center items-center ', estilos)
  const stylesButton = classnames(variants['blueForFitMedical'], estilos)



  return (
    <div className={styleDiv}>

      <button className={stylesButton} user={user} onClick={onClick}>Apto Médico</button>

    </div>
  )
}

export default ButtonFitMedical