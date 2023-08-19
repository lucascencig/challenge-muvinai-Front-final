import React from 'react'
import classnames from 'classnames'

const ButtonsNav = ({ onClick, estilos, modifier, text }) => {

  const variants = {
    danger: 'bg-red-500 text-white font-bold p-2 rounded-md',
    success: ' text[#000000] font-bold p-2 hover:bg-[#bfebdd] hover:rounded',
    normal: 'bg-white text-neutral-950'
  }

  const styleDiv = classnames('p-4 flex justify-center items-center ', estilos)
  const stylesButton = classnames(variants['success'], estilos)

  return (
    <div className={styleDiv}>

      <button onClick={onClick} modifier={modifier} className={stylesButton}>{text}</button>

    </div>
  )
}

export default ButtonsNav