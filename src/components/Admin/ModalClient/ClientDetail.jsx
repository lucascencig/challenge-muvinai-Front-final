import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS:
import WhatsAppButon from '../Buttons/WhatsAppButton/WhatsAppButon';
import EmailButton from '../Buttons/EmailButton/EmailButton';
import noFoto from '../../../assets/no-foto.png';

// ICONS:


const ClientDetail = ({ user }) => {
  const [users, setUsers] = useState([
    {
      _id: '1',
      Nombre: 'John',
      Apellido: 'Doe',
      Plan_activo: '3 meses al 50%',
      DNI: '32132654',
      Telefono: 1512345678,
      Alta: '24/08/2023',
      Nacimiento: '02/03/1990',
      Vigencia_actual: '2023-11-23',
      Fecha_proximo: '24/09/2023',
      isPay: 'Al dia',
      active_noActive: 'De alta',
      type_of_pay: 'Crédito',
      credit_card: 'MASTER',
      card_number: 4546123456784641,
      Apto_medico: '',
      Email: 'john@example.com',
      profilePhotos: '',
    },
    {
      _id: '2',
      Nombre: 'Jane',
      Apellido: 'Doe',
      Email: 'jane@example.com',
      profilePhotos: '',
    },
    {
      _id: '3',
      Nombre: 'Fulanito',
      Apellido: 'Doe',
      Email: 'fulanito@example.com',
      profilePhotos: '',
    },
    {
      _id: '4',
      Nombre: 'Gastón',
      Apellido: 'Doe',
      Email: 'gaston@example.com',
      profilePhotos: '',
    },
    {
      _id: '5',
      Nombre: 'Fernando',
      Apellido: 'Doe',
      Email: 'fernando@example.com',
      profilePhotos: '',
    },
  ]);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [clientDetail, setClientDetail] = useState(null);

  useEffect(() => {
    async function getClientDataDetail() {
      try {
        const response = await axios.get(`http://localhost:8000/clients/${id}`);
        setClientDetail(response.data);
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
          <div className="flex flex-col h-screen ">
            <div className='flex flex-col justify-center items-center text-justify p-4 '>
              <div className="flex flex-col   rounded-md">
                <div className=' float-right'>
                  <button className='flex justify-center items-center font-bold  float-right' onClick={handleClose}><p className='border-1 border-[#000] bg-[#ffffff0] w-10 h-10 p-2  rounded-md text-red-500 text-2xl mt-4 mb-2 flex justify-center items-center hover:text-red-700 hover:bg-[#ffffff40] hover:rounded-full ease-in-out duration-200'>❌</p> </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-md  shadow-md">
                  <div className="md:w-2/5 mt-4 flex justify-center items-center">
                    <img src={user.profilePhotoUrl || noFoto} alt="Foto de perfil" className="w-40 h-40 rounded-full" />
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="font-bold text-lg">
                        <p className="text-bold">Nombre:</p>
                        <p className="text-gray-500 text-lg">{user.Nombre}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Apellido:</p>
                        <p className="text-gray-500 text-lg">{user.Apellido}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Fecha de Nacimiento:</p>
                        <p className="text-gray-500 text-lg">{user.Nacimiento}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">DNI:</p>
                        <p className="text-gray-500 text-lg">{user.DNI}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Email:</p>
                        <p className="text-gray-500 text-lg">{user.Email}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Tél:</p>
                        <p className="text-gray-500 text-lg">{user.Telefono}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Alta el día:</p>
                        <p className="text-gray-500 text-lg">{user.Alta}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Plan activo:</p>
                        <p className="text-gray-500 text-lg">{user.Plan_activo}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Vigencia:</p>
                        <p className="text-gray-500 text-lg">{user.Vigencia_actual}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Próximo pago:</p>
                        <p className="text-gray-500 text-lg">{new Date(new Date(user.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Estado de pago:</p>
                        <p className="text-gray-500 text-lg">{user.isPay}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Estado de cliente:</p>
                        <p className="text-gray-500 text-lg">{user.active_noActive}</p>
                      </div>
                      <div className='flex justify-center items-center m-auto gap-4 mr-0'>
                        <a href={`https://api.whatsapp.com/send?phone=${user.Telefono}&text=Hola%20,Este%20mensaje%20es%20del%20gimnasio.%20%20Recuerda%20venir%20este%20mes`}>
                          <WhatsAppButon />
                        </a>
                        <a href={`mailto:${user.Email}`}>
                          <EmailButton />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) :
          users ? (<div className="flex flex-col h-screen ">
            <div className='flex flex-col justify-center items-center text-justify p-4 '>
              <div className="flex flex-col   rounded-md">
                <div className=' float-right'>
                  <button className='flex justify-center items-center font-bold  float-right' onClick={handleClose}><p className='border-1 border-[#000] bg-[#ffffff0] w-10 h-10 p-2  rounded-md text-red-500 text-2xl mt-4 mb-2 flex justify-center items-center hover:text-red-700 hover:bg-[#ffffff40] hover:rounded-full ease-in-out duration-200' >❌</p></button>
                </div>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-md  shadow-md">
                  <div className="md:w-2/5 mt-4 flex justify-center items-center">
                    <img src={users.profilePhotoUrl || noFoto} alt="Foto de perfil" className="w-40 h-40 rounded-full" />
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="font-bold text-lg">
                        <p className="text-bold">Nombre:</p>
                        <p className="text-gray-500 text-lg">{users.Nombre}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Apellido:</p>
                        <p className="text-gray-500 text-lg">{users.Apellido}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Fecha de Nacimiento:</p>
                        <p className="text-gray-500 text-lg">{users.Nacimiento}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">DNI:</p>
                        <p className="text-gray-500 text-lg">{users.DNI}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Email:</p>
                        <p className="text-gray-500 text-lg">{users.Email}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Tél:</p>
                        <p className="text-gray-500 text-lg">{users.Telefono}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Alta el día:</p>
                        <p className="text-gray-500 text-lg">{users.Alta}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Plan activo:</p>
                        <p className="text-gray-500 text-lg">{users.Plan_activo}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Vigencia:</p>
                        <p className="text-gray-500 text-lg">{users.Vigencia_actual}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Próximo pago:</p>
                        <p className="text-gray-500 text-lg">{new Date(new Date(users.Alta).getTime() + 30 * 24 * 60 * 60 * 1000).toString().split('T')[0]}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Estado de pago:</p>
                        <p className="text-gray-500 text-lg">{users.isPay}</p>
                      </div>
                      <div className="font-bold text-lg">
                        <p className="text-bold">Estado de cliente:</p>
                        <p className="text-gray-500 text-lg">{users.active_noActive}</p>
                      </div>
                      <div className='flex justify-center items-center m-auto gap-4 mr-0'>
                        <a href={`https://api.whatsapp.com/send?phone=${users.Telefono}&text=Hola%20,Este%20mensaje%20es%20del%20gimnasio.%20%20Recuerda%20venir%20este%20mes`}>
                          <WhatsAppButon />
                        </a>
                        <a href={`mailto:${users.Email}`}>
                          <EmailButton />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
            :
            null
        }
      </div>)
        :
        null
      }
    </div>
  );
};

export default ClientDetail;