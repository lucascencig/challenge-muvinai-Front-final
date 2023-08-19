import React from 'react'
import classnames from 'classnames'


import '../../../index.css'

export const NavFitMedical = ({ estilos }) => {

  const variants = {
    danger: 'w-64 m-2 bg-red-600 text-white font-bold p-2 rounded-md',
    update: 'w-64 m-2 bg-sky-600 text-white font-bold p-2 rounded-md'
  }

  const styleButtonDelete = classnames(variants['danger'], estilos)
  const styleButtonUpdate = classnames(variants['update'], estilos)

  return (
    <div className='flex justify-center items-center flex-col'>
      <button className={styleButtonDelete}>Eliminar apto medico</button>
      <button className={styleButtonUpdate}>Subir nuevo apto medico</button>
    </div>
  )
}


export default NavFitMedical