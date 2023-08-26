import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// COMPONENTS:
import ButtonsNav from '../Buttons/ButtonsNav'
// import noFoto from '../../../assets/'
// Estilos:
import '../../../index.css'


const NavAdmin = () => {



  return (
    <div>
      <main className='bg-[#2cad84]'>


        <div className='flex justify-center items-center'>
          <ul className='flex flex-row'>
            <li className='flex justify-center items-center'>
              <Link to={'/admin'}>
                < ButtonsNav modifier='success' text='Home' estilos='mt-4' />
              </Link>
              <Link to={'/all-clients'}>
                <ButtonsNav modifier='success' text='Clientes' estilos='mt-4' />
              </Link>
              <Link to={'/new-client'}>
                <ButtonsNav modifier='success' text='Crear Cliente' estilos='mt-4' />
              </Link>

            </li>

          </ul>
        </div>
      </main>

    </div>
  )
}

export default NavAdmin