import React, { useState } from 'react'

import classnames from 'classnames'


export const ButtonFitMedical = ({ user, estilos, onClick }) => {

  const variants = {
    blueForFitMedical: 'bg-sky-600 w-64 text-white font-bold p-2 rounded-md hover:bg-sky-500'
  }

  const styleDiv = classnames('p-4 flex justify-center items-center ', estilos)
  const stylesButton = classnames(variants['blueForFitMedical'], estilos)



  return (
    <div className={styleDiv}>

      <button className={stylesButton} user={user} onClick={onClick}>Desacargar apto medico de {user.Nombre}</button>

    </div>
  )
}

export default ButtonFitMedical