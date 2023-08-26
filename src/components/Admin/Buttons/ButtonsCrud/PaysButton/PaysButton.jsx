import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const PaysButton = ({ text, estilos, onClick }) => {
  const variants = {
    normal: 'bg-[#2cad84] flex justify-center items-center w-12 h-12 text-2xl  text-center text-[#ffffff] font-bold rounded-md  hover:bg-[#0c8d64] hover:text-white ease-in duration-100'
  }

  const stylesButton = classnames(variants.normal, estilos)

  return (
    <div>

      <button onClick={onClick} className={stylesButton}>{text}</button>

    </div>
  )
}

export default PaysButton