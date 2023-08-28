import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS:
import NavAdmin from '../../NavAdmin/NavAdmin'
import aptoMedico from '../../../../assets/aptoMedico.jpg'

// STYLES:
import classnames from 'classnames'
import '../../../../index.css'


const FitMedicalData = ({ user }) => {
  const { id } = useParams();
  const [fitMedicalClient, setFitMedicalClient] = useState()

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setFitMedicalClient(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  return (
    <div >
      <NavAdmin />
      {fitMedicalClient ?
        <div className=' bg-[#fafafa] h-screen'>
          <div className='pt-4'>
            <Link to={'/all-clients'}>
              <button className='flex justify-center items-center m-auto  rounded-md bg-[#5F8D4E] w-20  h-12 text-center text-[#fff] flex justify-center items-center font-bold hover:bg-[#285430] ease-in-out duration-100'>Atras</button>
            </Link>
            <div>
              <h2 className='flex justify-center items-center m-auto flex-col mt-4 mb-4 text-xl font-bold'>Apto medico del cliente</h2>
            </div>
          </div>
          <div className='bg-[#fff] w-10/12 flex justify-center items-center flex-col m-auto mt-4 rounded-md shadow-md'>
            <div className='flex flex-col justify-center items-center m-auto text-center pl-4'>
              <img className='rounded-lg mb-10' src={aptoMedico} alt="apto-medico" />
            </div>
          </div>
          <div className='bg-[#FAFAFA] flex justify-center items-center m-auto w-9/12 h-24 text-center pl-4 mt-4 '>
            <h2 className='text-xl font-bold'>Aprobar apto medico:</h2>
            <select className='ml-4 '>
              <option value="ok">Aprobado</option>
              <option value="notOk">Desaprobado</option>
            </select>
          </div>
        </div>
        :
        null
      }
    </div>
  )
}

export default FitMedicalData