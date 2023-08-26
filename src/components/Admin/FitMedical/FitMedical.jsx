import React, { useEffect, useState } from 'react'
import NavFitMedical from '../NavFitMedical/NavFitMedical'
import '../../../index.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import FitMedicalUpload from './FitMedicalUpload/FitMedicalUpload';

const FitMedical = ({ user }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [fitMedicalClient, setFitMedicalClient] = useState()

  useEffect(() => {
    async function getClientData() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setFitMedicalClient(response.data);
        console.log(response.data)

      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientData();
  }, [id]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      {isOpen ? (
        <div className='flex justify-center items-center flex-col'>
          <Link to={`/clients/apto-medico/${user.id}`}>
            <button className='w-64 m-2 bg-green-600 text-white font-bold p-2 rounded-md'>Ver Apto médico de {user.Nombre}</button>
          </Link>

          <NavFitMedical user={user} />


          {/* <FitMedicalUpload user={fitMedicalClient} /> */}

          <div className='flex justify-center items-center flex-col'>

            <button className='w-24 font-bold m-4 border-2  border-t-0  border-l-0  border-r-0 border-b-[#000000] hover:border-b-[#e58787] hover:text-[#e58787]' onClick={handleClose}>Cerrar</button>
          </div>


        </div>
      ) : null}
    </div>
  );
};

export default FitMedical;