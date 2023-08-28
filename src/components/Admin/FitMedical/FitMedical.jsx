import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS:
import NavFitMedical from '../NavFitMedical/NavFitMedical'

// STYLES:
import '../../../index.css'

// ICONS:
import { ImCross } from 'react-icons/Im'

const FitMedical = ({ user }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(true);
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div >
      {
        isOpen ? (
          <div>
            <div className='flex justify-center items-center w-full h-screen bg-[#000000b7] backdrop-blur-md  fixed top-24 left-0'>
              <div className="flex flex-col justify-center -mt-80 items-center rounded-md">
                <div className=' float-right'>
                  <button className='flex justify-center items-center font-bold ml-90 float-right' onClick={handleClose}><ImCross className=' border-1 border-[#000] bg-[#ffffff0] w-10 h-10 p-2  rounded-md text-red-500 text-2xl mt-4 mb-2 flex justify-center items-center hover:text-red-700 hover:bg-[#ffffff40] hover:rounded-full ease-in-out duration-200' /></button>
                </div>
                <div className="flex flex-col justify-center items-center md:flex-col gap-6 p-6 bg-white rounded-md  shadow-md">
                  <Link to={`/clients/apto-medico/${user.id}`}>
                    <button className='w-64 m-2 bg-green-600 text-white font-bold p-2 rounded-md'>Ver Apto médico de {user.Nombre}</button>
                  </Link>
                  <NavFitMedical user={user} />
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </div >
  );
};

export default FitMedical;