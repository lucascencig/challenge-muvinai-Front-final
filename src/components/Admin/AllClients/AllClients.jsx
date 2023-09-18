import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'
import ButtonsUpdate from '../Buttons/ButtonsCrud/UpdateButton/ButtonUpdate'
import ButtonFitMedical from '../Buttons/ButtonFitMedical/ButtonFitMedical'
import FitMedical from '../FitMedical/FitMedical'
import PaysButton from '../Buttons/ButtonsCrud/PaysButton/PaysButton'
import ClientDetail from '../ModalClient/ClientDetail'
import ButtonDetails from '../Buttons/ButtonDetails/ButtonDetails'
import Pagination from '../Pagination/Pagination'

// STYLES: 
import noFoto from '../../../assets/no-foto.png'
import '../../../index.css'

// ICONS:
import { BsCurrencyDollar } from 'react-icons/Bs'
import { FaRegEdit } from 'react-icons/Fa'
import { ButtonNewClient } from '../Buttons/ButtonNewClient/ButtonNewClient'

const AllClients = () => {
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
    {
      _id: '6',
      Nombre: 'Sebastian',
      Apellido: 'Doe',
      Email: 'sebastian@example.com',
      profilePhotos: '',
    },
    {
      _id: '7',
      Nombre: 'Maria',
      Apellido: 'Doe',
      Email: 'maria@example.com',
      profilePhotos: '',
    },
    {
      _id: '8',
      Nombre: 'Adriana',
      Apellido: 'Doe',
      Email: 'adriana@example.com',
      profilePhotos: '',
    },
    {
      _id: '9',
      Nombre: 'Celeste',
      Apellido: 'Doe',
      Email: 'celeste@example.com',
      profilePhotos: '',
    },
    {
      _id: '10',
      Nombre: 'Juan',
      Apellido: 'Doe',
      Email: 'juan@example.com',
      profilePhotos: '',
    },
  ]);
  const [showUsers, setShowUsers] = useState(true);
  const [showFitMedical, setShowFitMedical] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profilePhotos, setProfilePhotos] = useState({});
  const [detailSelectedUser, setDetailSelectedUser] = useState(null);


  useEffect(() => {
    async function getData() {
      try {
        const bdGet = await axios.get('http://localhost:8000/clients/');
        setUsers(bdGet.data);
        setShowUsers(true);
        const photos = {};
        for (const user of bdGet.data) {
          if (user.profilePhotoUrl) {
            photos[user._id] = user.profilePhotoUrl;
          }
        }
        setProfilePhotos(photos);
      } catch (error) {
        console.error('No se pudieron cargar los datos de los clientes', error);
      }
    }

    getData();
  }, []);

  const handleSelectUser = (user) => {
    setShowFitMedical(true);
    setSelectedUser(user);
  };

  const handleShowDetails = (user) => {
    if (user._id) {
      setDetailSelectedUser(user);
    }
  };

  return (
    <div>
      <div className='bg-[#FAFAFA]'>
        <NavAdmin />
        <div className='bg-[#fff] w-10/12 flex justify-center items-center flex-col m-auto mt-4 rounded-md'>
          <div className='flex justify-between items-center w-10/12 mt-4'>
            <div>
              <h2 className='font-bold ml-2 text-xl'>Lista de clientes:</h2>
            </div>
            <div>
              <ButtonNewClient />
            </div>
          </div>
          <Pagination />
          <div className='bg-[#e1e1e1] text-[#B5B5C3]  mt-4 list-none flex flex-row justify-between items-center m-auto w-10/12 gap-2 bg-white p-4 rounded-md font-bold text-lg'>
            <li className='pl-4'>Nombre y apellido</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li className='pl-8'>Detalles</li>
            <li className='pl-8'>Apto médico</li>
            <li className='pl-8'>Historial de pagos</li>
            <li className='pr-2'>Editar</li>
          </div>



          {showUsers ? (
            users.map((e) => (
              <div
                key={e._id}
                className="w-10/12  mt-4 p-4 bg-white shadow-md rounded-md flex justify-between items-center m-auto"
              >
                <div className="flex justify-between m-auto items-center ml-2">
                  <img
                    className="w-24 h-24 rounded-full mr-2"
                    src={e.profilePhotos || noFoto}
                    alt="foto de perfil"
                  />
                  <div>
                    <div className='pr-12'>
                      <h2 className="font-bold text-xl w-64">
                        {e.Nombre} {e.Apellido}
                      </h2>
                      <p className="text-gray-600">{e.Email}</p>
                      <p className='text-sm'>Id de socio: <span className='text-bold'>{e._id}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center flex-row space-x-4">
                    <div className='w-2/5 pl-36 flex items-center justify-center m-auto'>
                      <div className='mx-8'>
                        <ButtonDetails onClick={() => handleShowDetails(e)} user={e} />
                        {detailSelectedUser && detailSelectedUser._id === e._id && (
                          <div className="flex justify-center items-center  w-full h-auto bg-[#000000b7] backdrop-blur-md  fixed top-24 left-0">
                            <ClientDetail user={detailSelectedUser} className='ease-in duration-200' />
                          </div>
                        )}
                      </div>
                      <div className='mx-20'>
                        <ButtonFitMedical onClick={() => handleSelectUser(e)} user={e} />
                        {selectedUser && selectedUser._id === e._id && (
                          <div>
                            <FitMedical user={selectedUser} />
                          </div>
                        )}
                      </div>
                      <div className='mx-28'>
                        <Link to={`/clients/pays/${e._id}`}>
                          <PaysButton text={<BsCurrencyDollar />} user={e} />
                        </Link>
                      </div>
                      <div className='mx-0 '>
                        <Link to={`/clients/${e._id}`}>
                          <ButtonsUpdate text={<FaRegEdit />} user={e} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">NO HAY CLIENTES PARA MOSTRAR</h2>
            </div>
          )}
        </div>
      </div>
      <Pagination />

    </div>
  );
};

export default AllClients