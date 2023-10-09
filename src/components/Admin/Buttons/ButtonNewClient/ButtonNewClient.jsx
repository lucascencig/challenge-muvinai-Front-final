import React from 'react'
import { Link } from 'react-router-dom'

// STYLES:
import '../../../../index.css'

// ICONS:
import { FaCirclePlus } from 'react-icons/fa6'

export const ButtonNewClient = () => {
  return (
    <div >
      <Link to={'/new-client'}>
        <button className='rounded-md bg-[#5F8D4E] w-56  h-12 text-center text-[#fff] flex justify-center items-center font-bold hover:bg-[#285430] ease-in-out duration-100'><FaCirclePlus className='mr-2 font-bold w-8' /> Nuevo cliente</button>
      </Link>
    </div>
  )
}

export default ButtonNewClient