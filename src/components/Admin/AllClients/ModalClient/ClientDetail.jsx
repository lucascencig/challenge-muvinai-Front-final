import axios from 'axios';
import React, { useEffect, useState } from 'react';
import noFoto from '../../../../assets/no-foto.png';
import { useParams } from 'react-router-dom';
import { ImCross } from 'react-icons/Im'

const ClientDetail = ({ user }) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [clientDetail, setClientDetail] = useState(null);

  useEffect(() => {
    async function getClientDataDetail() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setClientDetail(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al obtener los datos del cliente", error);
      }
    }
    getClientDataDetail();
  }, [id]);

  const handleClose = () => {
    setIsOpen(false);
    setClientDetail(null)
  };

  return (
    <div >
      {isOpen ? (<div>
        {clientDetail ? (
          <div className="flex flex-col">
            <div className='flex flex-col justify-center items-center text-justify p-4 '>
              <div className="flex flex-col gap-6 p-6 bg-[#2cad84] rounded-md shadow-md">
                <div className=' float-right'>

                  <button className='flex justify-center items-center font-bold  float-right' onClick={handleClose}><ImCross className='border-1 border-[#000] bg-slate-200 w-8 h-8 p-2 rounded-md text-red-500 text-2xl mt-4 flex justify-center items-center hover:text-red-700 hover:bg-slate-400 ease-in-out duration-200' /></button>
                </div>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-md shadow-md">
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img src={user.profilePhotoUrl || noFoto} alt="Foto de perfil" className="w-40 h-40 rounded-full" />
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Nombre:</p>
                        <p className="text-bold">{user.Nombre}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Apellido:</p>
                        <p className="text-bold">{user.Apellido}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Fecha de Nacimiento:</p>
                        <p className="text-bold">{user.Nacimiento}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">DNI:</p>
                        <p className="text-bold">{user.DNI}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Email:</p>
                        <p className="text-bold">{user.Email}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Tél:</p>
                        <p className="text-bold">{user.Telefono}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Alta el día:</p>
                        <p className="text-bold">{user.Alta}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Plan activo:</p>
                        <p className="text-bold">{user.Plan_activo}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Vigencia:</p>
                        <p className="text-bold">{user.Vigencia_actual}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Próximo pago:</p>
                        <p className="text-bold">{new Date(new Date(user.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Estado de pago:</p>
                        <p className="text-bold">{user.isPay}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-gray-600">Estado de cliente:</p>
                        <p className="text-bold">{user.active_noActive}</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>



            </div>
          </div>
        ) : null}
      </div>) :
        null
      }

    </div>
  );
};

export default ClientDetail;