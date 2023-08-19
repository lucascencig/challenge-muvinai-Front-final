import React from 'react'
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'

const ButtonsUpdate = ({ onClick, estilos, modifier, text }) => {

  const variants = {
    danger: 'bg-red-500 text-[#000000] font-bold p-2 rounded-md hover:bg-red-300',
    success: 'bg-[#c1f1e2] text-[#000000] font-bold p-2 rounded-md hover:bg-green-300',
    normal: 'bg-[#2cad84] text-[#000000] font-bold p-2 rounded-md border-2 hover:bg-[#6bdcb8] hover:text-white'
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