import React, { useEffect, useState } from 'react'
import axios from 'axios'


// COMPONENTS:
import NavAdmin from '../NavAdmin/NavAdmin'
import ButtonsAdmin from '../Buttons/ButtonsNav'
import noFoto from '../../../assets/no-foto.png'
import ButtonsUpdate from '../Buttons/ButtonsCrud/UpdateButton/ButtonUpdate'
import ButtonFitMedical from '../Buttons/ButtonFitMedical/ButtonFitMedical'
import FitMedical from '../FitMedical/FitMedical'
import { Link } from 'react-router-dom'
import '../../../index.css'
import ButtonDelete from '../Buttons/ButtonsCrud/DeleteButton/ButtonDelete'
import WhatsAppButon from '../Buttons/WhatsAppButton/WhatsAppButon'
import EmailButton from '../Buttons/EmailButton/EmailButton'
import { uploadFile } from '../../../firebase/config'

import PaysButton from '../Buttons/ButtonsCrud/PaysButton/PaysButton'
import FitMedicalUpload from '../FitMedical/FitMedicalUpload/FitMedicalUpload'
import { TbReportMoney } from 'react-icons/Tb'
import { BiEdit } from 'react-icons/Bi'
import ModalClient from './ModalClient/ClientDetail'
import ClientDetail from './ModalClient/ClientDetail'
import ButtonDetails from '../Buttons/ButtonDetails/ButtonDetails'





const AllClients = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);
  const [showFitMedical, setShowFitMedical] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profilePhotos, setProfilePhotos] = useState({});
  const [showDetails, setShowDetails] = useState(false)
  const [detailSelectedUser, setDetailSelectedUser] = useState(null);
  const [open, setOpen] = useState(false)




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

    <div  >
      <div className='bg-[#c9e8de]'>
        <NavAdmin />

        {showUsers ? (
          users.map((e) => (

            <div
              key={e._id}
              className="w-3/5  mt-4 p-4 bg-white shadow-md rounded-md flex justify-between items-center m-auto"
            >
              <div className="flex justify-center m-auto items-center ">
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  src={profilePhotos[e._id] || noFoto}
                  alt="foto de perfil"
                />
                <div>
                  <div className='pr-8'>
                    <h2 className="font-bold text-xl">
                      {e.Nombre} {e.Apellido}
                    </h2>
                    <p className="text-gray-600">{e.Email}</p>
                    <p className='text-sm'>Id de socio: <span className='text-bold'>{e._id}</span></p>

                  </div>
                </div>
                <div className="flex items-center flex-row-reverse space-x-4">


                  <Link to={`/clients/pays/${e._id}`}>
                    <PaysButton text={<TbReportMoney />} user={e} />
                  </Link>
                  <Link to={`/clients/${e._id}`}>
                    <ButtonsUpdate text={<BiEdit />} user={e} />
                  </Link>


                  <ButtonFitMedical onClick={() => handleSelectUser(e)} user={e} />
                  {selectedUser && selectedUser._id === e._id && (
                    <div>
                      <FitMedical user={selectedUser} />
                    </div>
                  )}


                  <div >
                    <ButtonDetails onClick={() => handleShowDetails(e)} user={e} />
                    {detailSelectedUser && detailSelectedUser._id === e._id && (
                      <div className="flex justify-center items-center  w-4/5 h-auto backdrop-blur-md  fixed top-32 left-52">
                        <ClientDetail user={detailSelectedUser} className='ease-in duration-200' />

                      </div>
                    )}
                  </div>



                  <a href={`https://api.whatsapp.com/send?phone=${e.Telefono}&text=Hola%20,Este%20mensaje%20es%20del%20gimnasio.%20%20Recuerda%20venir%20este%20mes`}>
                    <WhatsAppButon />
                  </a>
                  <a href={`mailto:${e.Email}`}>
                    <EmailButton />
                  </a>


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
  );
};




export default AllClients