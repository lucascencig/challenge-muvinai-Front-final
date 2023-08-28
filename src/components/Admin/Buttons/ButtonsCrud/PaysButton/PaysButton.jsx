import React from 'react'

// STYLES:
import classnames from 'classnames'

const PaysButton = ({ text, estilos, onClick }) => {
  const variants = {
    normal: 'bg-[#5F8D4E] flex justify-center items-center w-12 h-12 text-2xl  text-center text-[#ffffff] font-bold rounded-md  hover:bg-[#285430] hover:text-white ease-in duration-100'
  }
  const stylesButton = classnames(variants.normal, estilos)

  return (
    <div>
      <button onClick={onClick} className={stylesButton}>{text}</button>
    </div>
  )
}

export default PaysButton