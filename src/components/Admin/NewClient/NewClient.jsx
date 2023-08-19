import React from 'react'
import classnames from 'classnames'

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'


// Estilos:
import '../../../index.css'

export const NewClient = ({ estilos }) => {

  const variants = {

    inputs: 'w-64 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500',
    button: 'w-64 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600'
  }

  const inputStyle = classnames(variants['inputs'], estilos)
  const buttonStyle = classnames(variants['button'], estilos)

  return (
    <div>

      <NavAdmin />


      <h1 className='text-center font-bold text-2xl pb-6 mt-4 mb-0'>NEW CLIENT</h1>
      <section className='mt-8 flex justify-center items-center flex-col'>
        <form className='flex flex-col space-y-2' action="">
          <input
            className='border-0 outline-none w-64 '
            type="file"
            name="Nombre"
            placeholder="Nombre"

          />
          <input
            className={inputStyle}
            type="text"
            name="Nombre"
            placeholder="Nombre"

          />
          <input
            className={inputStyle}
            type="text"
            name="Apellido"
            placeholder="Apellido"

          />
          <input
            className={inputStyle}
            type="text"
            name="Fecha de Nacimiento"
            placeholder="Fecha de Nacimiento"

          />
          <input
            className={inputStyle}
            type="text"
            name="DNI"
            placeholder="DNI"
          />
          <input
            className={inputStyle}
            type="text"
            name="Email"
            placeholder="Email"
          />
          <input
            className={inputStyle}
            type="text"
            name="Teléfono"
            placeholder="Teléfono"
          />
          <input
            className={inputStyle}
            type="date"
            name="Alta el día"
            placeholder="Fecha de alta"
          />
          <input
            className={inputStyle}
            type="text"
            name="Plan activo"
            placeholder="Plan"
          />
          <button
            className={buttonStyle}

          >
            Guardar Cambios
          </button>
        </form>
      </section>
    </div>
  )
}

export default NewClient