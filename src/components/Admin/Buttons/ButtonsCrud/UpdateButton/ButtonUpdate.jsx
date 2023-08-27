import React from 'react'
import classnames from 'classnames'


const ButtonsUpdate = ({ onClick, estilos, modifier, text }) => {

  const variants = {
    danger: 'bg-red-500 text-[#000000] font-bold p-2 rounded-md hover:bg-red-300',
    success: 'bg-[#c1f1e2] text-[#000000] font-bold p-2 rounded-md hover:bg-green-300',
    normal: 'bg-[#5F8D4E] flex justify-center items-center w-12 h-12 text-2xl  text-center text-[#ffffff] font-bold rounded-md  hover:bg-[#285430] hover:text-white ease-in duration-100'
  }

  const styleDiv = classnames('p-4 flex justify-center items-center ', estilos)
  const stylesButton = classnames(variants.normal, estilos,

  )
  return (
    <div className={styleDiv}>

      <button onClick={onClick} className={stylesButton}>
        {text}
      </button>

    </div>
  )
}

export default ButtonsUpdate