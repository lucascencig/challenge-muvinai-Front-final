import React from 'react'

// COMPONENTS:
import foto from '../../../assets/fotogym.jpg'

// STYLES:
import '../../../index.css'

// ICONS:
import { CgGym } from 'react-icons/Cg'
import { GiLeg } from 'react-icons/Gi'
import { RiBodyScanFill } from 'react-icons/Ri'
import { AiOutlineInstagram } from 'react-icons/Ai'
import { BiLogoFacebookSquare, BiLogoTelegram } from 'react-icons/Bi'
import { BsTwitter } from 'react-icons/Bs'

const Home = () => {
  return (
    <div >
      <section className='bg-gradient-to-r from-[#5F8D4E] to-[#285430] w-full pb-16'>
        <main className='w-10/12 flex  rounded-md justify-center items-center m-auto '>
          <div className='-mt-0 p-4'>
            <h2 className='w-10/12 text-5xl text-[#fff]'>Obeten el cuerpo ideal y fuerza de musculos siguiendo nuestros cursos de alta calidad.</h2>
          </div>
          <div>
            <img src={foto} alt="" className='w-10/12 ml-24 flex justify-center items-center relative top-16 rounded-tl-[80px] rounded-br-[80px]' />
          </div>
        </main>
        <section className='flex flex-col p-8 text-2xl w-2/5 ml-36 mt-16'>
          <p className='text-[#fff] mb-4'>Obten todas las novedades suscribiendote a nuestra newsletters</p>
          <div>
            <input type="text" name="" id="" placeholder='Ingrese su email...' className='w-64 rounded-md mr-2 p-2 text-lg border-2 border-[#285430] focus:outline-[#285430]' />
            <button className=' rounded-md bg-[#285430] w-32 py-2  hover:bg-[#39552e] ease-in-out duration-100 text-[#fff]'>Suscribite</button>
          </div>
        </section>
        <div className='flex justify-around w-2/5 text-[#fff] text-xl ml-28'>
          <div className='flex flex-col'>
            <h2 className='font-bold text-2xl'>20</h2>
            <p className='w-32'>Años de experiencia</p>
          </div>
          <div>
            <h2 className='font-bold text-2xl'>+10K</h2>
            <p className='w-32'>Clientes satisfechos</p>
          </div>
          <div>
            <h2 className='font-bold text-2xl'>50</h2>
            <p className='w-32'>Expertos en clases</p>
          </div>
        </div>
      </section>
      <section className='mb-20'>
        <div className='flex mt-20 '>
          <h2 className='text-5xl ml-40'>Top ejercicios</h2>
        </div>
        <div className='flex justify-around items-center m-auto mt-10 -gap-8'>
          <div className='w-80 border-2 border-[#285430] p-4 rounded-md'>
            <CgGym className='w-12 h-12 mb-2 bg-[#285430] text-[#fff] p-2 rounded-md' />
            <h2 className='text-2xl font-bold mb-2'>Ejercicios de pecho</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cupiditate reprehenderit nesciunt eligendi id optio architecto libero, quibusdam adipisci voluptas est doloremque error. Illo consequatur vel voluptate ducimus neque? Iusto!</p>
          </div>
          <div className='w-80 border-2 border-[#285430] bg-[#285430] text-[#fff] p-4 rounded-md'>
            <GiLeg className='w-12 h-12 mb-2 bg-[#fff] p-2 rounded-md text-[#285430]' />
            <h2 className='text-2xl font-bold mb-2'>Ejercicios de pecho</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cupiditate reprehenderit nesciunt eligendi id optio architecto libero, quibusdam adipisci voluptas est doloremque error. Illo consequatur vel voluptate ducimus neque? Iusto!</p>
          </div>
          <div className='w-80 border-2 border-[#285430] p-4 rounded-md'>
            <RiBodyScanFill className='w-12 h-12 mb-2 bg-[#285430] text-[#fff] p-2 rounded-md' />
            <h2 className='text-2xl font-bold mb-2'>Ejercicios de pecho</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cupiditate reprehenderit nesciunt eligendi id optio architecto libero, quibusdam adipisci voluptas est doloremque error. Illo consequatur vel voluptate ducimus neque? Iusto!</p>
          </div>
        </div>
      </section>
      <footer className='bg-gradient-to-r from-[#5F8D4E] to-[#285430] w-full pb-16'>
        <div className='flex justify-around items-center gap-64 p-12'>
          <div>
            <h2 className='text-3xl text-[#fff]'>Tipos de negocios</h2>
            <ul className='text-[#fff] mt-4'>
              <li className='text-lg hover:text-[#c9c9c9]'><a href="">Gym</a> </li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href="">Pilates</a> </li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href="">PT Studio</a> </li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href="">Fitness Studio</a> </li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href="">Boxing Studio</a> </li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href="">Wellness</a> </li>
            </ul>
          </div>
          <div>
            <h2 className='text-3xl text-[#fff] '>Solutions</h2>
            <ul className='text-[#fff] mt-4'>
              <li className='text-lg hover:text-[#c9c9c9]'><a href=""></a> Marketing Tools</li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href=""></a> Sales Tools</li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href=""></a> Management Tools</li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href=""></a> Member Experience</li>
              <li className='text-lg hover:text-[#c9c9c9]'><a href=""></a> Retention Tools</li>
            </ul>
          </div>
          <div>
            <h2 className='text-3xl -mt-20 text-[#fff]'>Redes</h2>
            <ul className='flex p-2 mt-4 border-2 border-[#5F8D4E] bg-[#5F8D4E] rounded-lg'>
              <li className='w-12 h-12 text-4xl  text-[#fff] flex items-center justify-center rounded-md hover:text-[#bb5ebd]'><a href=""><AiOutlineInstagram /></a> </li>
              <li className='w-12 h-12 text-4xl pl-4 text-[#fff] flex items-center justify-center rounded-md hover:text-[#1616dd]'><a href=""><BiLogoFacebookSquare /></a> </li>
              <li className='w-12 h-12 text-4xl pl-4 text-[#fff] flex items-center justify-center rounded-md hover:text-[#16a4e0]'><a href=""><BiLogoTelegram /></a> </li>
              <li className='w-12 h-12 text-4xl pl-4 text-[#fff] flex items-center justify-center rounded-md hover:text-[#16a4e0]'><a href=""><BsTwitter /></a> </li>
            </ul>
          </div>
        </div >
        <p className='text-[#fff] text-center'>© 2023 Lucas Cencig - Full Stack Developer - All Rights Reserved.</p>
      </footer >
    </div >
  )
}

export default Home