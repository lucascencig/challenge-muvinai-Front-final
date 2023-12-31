import React from 'react'

// STYLES:
import classnames from 'classnames'

const ButtonsNav = ({ onClick, estilos, modifier, text }) => {
  const variants = {
    danger: 'bg-red-500 text-white font-bold p-2 rounded-md',
    success: ' text[#fff] rounded-t-md rounded-b-0 font-bold w-32 h-16 hover:bg-[#FAFAFA] hover:text-[#285430] ease-in-out duration-200 active:w-32 active:h-16 focus:bg-[#fff] focus:text-[#285430] active:bg-[#fff] active:rounded-t-md  active:rounded-b-0',
    home: 'text[#fff] rounded-t-md rounded-b-0 font-bold w-32 h-16 hover:bg-[#5F8D4E] hover:text-[#285430] ease-in-out duration-200 active:w-32 active:h-16 focus:bg-[#fff] focus:text-[#285430] active:bg-[#5F8D4E] active:rounded-t-md  active:rounded-b-0'
  }
  const styleDiv = classnames(' flex justify-center items-center focus:bg-[#fff]', estilos)
  const stylesButton = classnames(variants['success'], estilos)
  const homeButton = classnames(variants['home'], estilos)

  return (
    <div className={styleDiv}>
      <button onClick={onClick} modifier={modifier} className={stylesButton}>{text}</button>
    </div>
  )
}

export default ButtonsNav