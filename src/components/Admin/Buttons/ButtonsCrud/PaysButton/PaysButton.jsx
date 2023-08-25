import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const PaysButton = ({ text, estilos, onClick }) => {
  const variants = {
    normal: 'bg-[#2cad84] w-64 text-[#000000] font-bold p-2 rounded-md border-2 hover:bg-[#6bdcb8] hover:text-white'
  }

  const stylesButton = classnames(variants.normal, estilos)

  return (
    <div>

      <button onClick={onClick} className={stylesButton}>{text}</button>

    </div>
  )
}

export default PaysButton