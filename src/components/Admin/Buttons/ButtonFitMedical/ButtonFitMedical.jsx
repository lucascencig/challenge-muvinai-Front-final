import React from 'react'

// STYLES:
import classnames from 'classnames'

// ICONS:
import { FaNotesMedical } from 'react-icons/Fa'

export const ButtonFitMedical = ({ user, estilos, onClick }) => {
  const variants = {
    blueForFitMedical: 'bg-[#5F8D4E] flex justify-center items-center w-12 h-12 text-2xl  text-center text-[#ffffff] font-bold rounded-md  hover:bg-[#285430] hover:text-white ease-in duration-100'
  }
  const styleDiv = classnames('p-4 flex justify-center items-center ', estilos)
  const stylesButton = classnames(variants['blueForFitMedical'], estilos)

  return (
    <div className={styleDiv}>
      <button className={stylesButton} user={user} onClick={onClick}><FaNotesMedical /></button>
    </div>
  )
}

export default ButtonFitMedical