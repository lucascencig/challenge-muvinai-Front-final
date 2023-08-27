import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// COMPONENTS:
import ButtonsNav from '../Buttons/ButtonsNav'
// import logo from '../../../assets/'
// Estilos:
import '../../../index.css'
import logo from '../../../assets/logo.jpg'
import { BiSearchAlt } from 'react-icons/Bi'


const NavAdmin = () => {



  return (
    <div>
      <main className='bg-[#285430] h-24 flex justify-between'>

        <img src={logo} alt="logo" className='w-24 h-24 rounded-full mt-0 ml-10' />
        <div className='flex justify-center items-center ml-10 w-2/5 float-center m-auto'>
          <ul className='flex flex-row text-[#fff]'>
            <li className='flex justify-center items-center'>
              <Link to={'/admin'}>
                < ButtonsNav modifier='success' text='Home' estilos='mt-4' />
              </Link>
              <Link to={'/all-clients'}>
                <ButtonsNav modifier='success' text='Clientes' estilos='mt-4' />
              </Link>
              <Link to={'/new-client'}>
                <ButtonsNav modifier='success' text='Nuevo Cliente' estilos='mt-4' />
              </Link>

            </li>

          </ul>
          <input type="text" className='mt-8 mx-4 w-64 h-10 pl-2 rounded-md focus:outline-[#5F8D4E]' placeholder='Buscar cliente...' /><button ><BiSearchAlt className='w-10 h-10 p-2 mt-8 rounded-md -ml-2  text-[#fff] bg-[#5F8D4E]  hover:bg-[#4f7541] ease-in-out duration-100' /></button>
        </div>
        <div className='flex float-right mt-4 mr-4 text-lg font-bold w-48 text-[#fff]'>

          {window.localStorage.getItem('adminEmail')}
        </div>

      </main>

      <div>
      </div>

    </div>
  )
}

export default NavAdmin