import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS:
import ButtonsNav from '../Buttons/ButtonsNav'
import logo from '../../../assets/logo.png'

// STYLES:
import '../../../index.css'

// ICONS:
import { FaMagnifyingGlass } from 'react-icons/fa6'

const NavAdmin = () => {

  const logOut = () => {
    window.localStorage.removeItem('adminEmail')
  }
  return (
    <div>
      <main className='bg-gradient-to-r from-[#5F8D4E] to-[#285430] w-full h-24 flex justify-between '>
        <img src={logo} alt="logo" className='w-24 h-24 rounded-full mt-0 ml-10' />
        <div className='flex justify-center items-center ml-10 w-2/5 float-center m-auto'>
          <ul className='flex flex-row text-[#fff]'>
            <li className='flex justify-center items-center'>
              <Link to={'/admin'}>
                < ButtonsNav modifier='home' text='Home' estilos='mt-4' />
              </Link>
              <Link to={'/all-clients'}>
                <ButtonsNav modifier='success' text='Clientes' estilos='mt-4' />
              </Link>
              <Link to={'/new-client'}>
                <ButtonsNav modifier='success' text='Nuevo Cliente' estilos='mt-4' />
              </Link>
            </li>
          </ul>
          <input type="text" className='mt-8 mx-4 w-64 h-10 pl-2 rounded-md focus:outline-[#5F8D4E]' placeholder='Buscar cliente...' /><button ><FaMagnifyingGlass className='w-10 h-10 p-2 mt-8 rounded-md -ml-2  text-[#fff] bg-[#5F8D4E]  hover:bg-[#4f7541] ease-in-out duration-100' /></button>
        </div>
        <div className='flex float-right mt-4 mr-20 text-lg font-bold w-48 text-[#fff] flex-col'>
          {window.localStorage.getItem('adminEmail')}
          <div className='w-40 rounded-md bg-[#5F8D4E] text-center hover:text-[#c9c9c9]'>
            <Link to={'/'}>
              <button onClick={logOut}>Cerrar Sesión</button>
            </Link>
          </div>
        </div>
      </main>
      <div>
      </div>
    </div>
  )
}

export default NavAdmin